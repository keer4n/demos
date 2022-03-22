<script lang="ts">
    import CollapsibleSeparator from "../components/CollapsibleSeparator.svelte";
    import "@tensorflow/tfjs-backend-cpu";
    import '@tensorflow/tfjs-backend-webgl';
    import * as cocoSsd from "@tensorflow-models/coco-ssd";
    import { onMount } from "svelte/internal";

    let video, liveView, enableWebcamButton;

    function getUserMediaSupported() {
        return !!(
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia
        );
    }

    let model, localStream;
    (async () => {
        model = await cocoSsd.load();
    })();
    function enableCam(e) {
        if (!getUserMediaSupported()) {
            console.log("Webcam not supported");
        }
        if (!model) {
            return;
        }

        const constraints = {
            video: true,
        };

        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            localStream = stream;
            video.srcObject = stream;
            console.log('stream', stream);
            video.addEventListener("loadeddata", predictWebcam);
        });
    }

    let children = [];
    let animationFrameReqID;
    function predictWebcam() {
        children.forEach((el) => liveView.removeChild(el));
        children.splice(0);
        model.detect(video).then((predictions) => {
            console.log('live view');
            for (let prediction of predictions) {
                if (prediction.score > 0.66) {
                    const p = document.createElement("p");
                    p.innerText =
                        prediction.class +
                        " " +
                        prediction.score +
                        " confidence";
                    p.style.marginLeft = prediction.bbox[0] + "px";
                    p.style.marginTop = prediction.bbox[1] - 10 + "px";
                    p.style.width = prediction.bbox[2] - 10 + "px";
                    p.style.top = "0";
                    p.style.left = "0";

                    const highlighter = document.createElement("div");
                    highlighter.className = "highlighter";
                    highlighter.style.left = prediction.bbox[0] + "px";
                    highlighter.style.top = prediction.bbox[1] + "px";
                    highlighter.style.width = prediction.bbox[2] + "px";
                    highlighter.style.height = prediction.bbox[3] + "px";

                    liveView.append(highlighter);
                    liveView.append(p);
                    liveView = liveView;
                    children.push(highlighter);
                    children.push(p);
                }
            }

            animationFrameReqID = window.requestAnimationFrame(predictWebcam);
        });
    }
</script>

<div>
    <div bind:this={liveView} id="liveView" class="camView">
        <button
            on:click={enableCam}
            bind:this={enableWebcamButton}
            id="webcamButton">Enable Webcam</button
        >
        <button
            on:click={() => {
                localStream.getVideoTracks().forEach(t => t.stop());
                window.cancelAnimationFrame(animationFrameReqID);
            }}>Stop</button
        >
        <video
            bind:this={video}
            id="webcam"
            autoplay
            muted
            width="640"
            height="480"
        />
    </div>
</div>

<style>
    .camView {
        position: relative;
        float: left;
        width: calc(100% - 20px);
        margin: 10px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    :global(.camView p) {
        position: absolute;
        padding: 5px;
        background-color: rgba(255, 111, 0, 0.85);
        color: #fff;
        border: 1px dashed rgba(255, 255, 255, 0.7);
        z-index: 2;
        font-size: 12px;
    }

    :global(.highlighter) {
        background: rgba(0, 255, 0, 0.25);
        border: 1px dashed #fff;
        z-index: 1;
        position: absolute;
    }
</style>
