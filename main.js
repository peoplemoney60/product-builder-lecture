const URL = "https://teachablemachine.withgoogle.com/models/IjLLUaOge/";

let model, labelContainer, maxPredictions;

// Load the image model
async function loadModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
}

loadModel();

// Handle Image Upload
async function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = async function(e) {
            document.querySelector('.upload-section').style.display = 'none';
            document.getElementById('loading').style.display = 'block';
            
            const faceImage = document.getElementById('face-image');
            faceImage.src = e.target.result;
            
            // Wait for image to load before predicting
            faceImage.onload = async function() {
                await predict();
                document.getElementById('loading').style.display = 'none';
                document.querySelector('.file-upload-content').style.display = 'block';
            };
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Prediction Logic
async function predict() {
    const faceImage = document.getElementById('face-image');
    const prediction = await model.predict(faceImage);
    
    // Sort predictions to find the top result
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    
    const topResult = prediction[0].className;
    displayResults(topResult, prediction);
}

function displayResults(topResult, allPredictions) {
    const resultMessage = document.querySelector('.result-message');
    const resultDescription = document.querySelector('.result-description');
    const labelContainer = document.getElementById('label-container');
    
    labelContainer.innerHTML = '';
    
    // Set Main Message & Description
    if (topResult === "dog") {
        resultMessage.innerHTML = "친절한 강아지상!";
        resultDescription.innerHTML = "당신은 밝고 활동적인 에너지를 가진 사람입니다. 주변 사람들에게 편안함과 즐거움을 주며, 솔직하고 다정한 성격으로 누구에게나 사랑받는 매력을 지니고 있네요!";
    } else if (topResult === "cat") {
        resultMessage.innerHTML = "도도한 고양이상!";
        resultDescription.innerHTML = "당신은 차분하면서도 세련된 분위기를 가진 사람입니다. 처음에는 조금 차가워 보일 수 있지만, 알면 알수록 깊은 매력을 가진 '츤데레' 스타일이시군요!";
    }

    // Display all probability bars
    for (let i = 0; i < maxPredictions; i++) {
        const className = allPredictions[i].className;
        const probability = (allPredictions[i].probability * 100).toFixed(0);
        const barClass = className.toLowerCase() + "-bar";
        
        const barHTML = `
            <div class="bar-container">
                <div class="label-name">${className === "dog" ? "강아지" : "고양이"}</div>
                <div class="bar-bg">
                    <div class="bar-fill ${barClass}" style="width: ${probability}%"></div>
                </div>
                <div class="percent-text">${probability}%</div>
            </div>
        `;
        labelContainer.innerHTML += barHTML;
    }
}

function removeUpload() {
    document.getElementById('face-image').src = '#';
    document.querySelector('.file-upload-content').style.display = 'none';
    document.querySelector('.upload-section').style.display = 'block';
    document.querySelector('.file-upload-input').value = '';
}