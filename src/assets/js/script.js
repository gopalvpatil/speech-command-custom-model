let recognizer;

function calculateNewPosition(positionx, positiony, direction)
{
    return {
        'up' : [positionx, positiony - 10],
        'down': [positionx, positiony + 10],
        'left' : [positionx - 10, positiony],
        'right' : [positionx + 10, positiony],
        'default': [positionx, positiony]
    }[direction];
}

function predict() {
 const words = recognizer.wordLabels();
 recognizer.listen(({scores}) => {
   scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
   scores.sort((s1, s2) => s2.score - s1.score);

    var direction = scores[0].word;

    console.debug("word recognized", direction);

    document.getElementById('speechToText').innerHTML = direction;

 }, {probabilityThreshold: 0.75});
}

async function run() {

    //const model = await tf.loadLayersModel('file://D:/vscode_workspace/tfjs-client/tfjs-client/src/assets/model/custom-model.json');
   // const model = await tf.loadLayersModel('http://localhost:1234/assets/model/custom-model.json');
    //recognizer = speechCommands.create('BROWSER_FFT');
    recognizer = speechCommands.create('BROWSER_FFT', null, 'http://localhost:8082/assets/model/custom-model.json', 'http://localhost:8082/assets/model/metadata.json');
    //recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    console.debug(recognizer.wordLabels());
    
    //const model = await tf.loadLayersModel('indexeddb://tfjs-speech-commands-model/model-2019-09-15T15.03.09');

 //recognizer = speechCommands.create('BROWSER_FFT');
 //await recognizer.ensureModelLoaded();

  predict();
}

run();