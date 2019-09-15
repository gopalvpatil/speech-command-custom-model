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

   // var [x1, y1] = calculateNewPosition(positionx, positiony, direction);

   /*  contex.moveTo(positionx,positiony);
    contex.lineTo(x1, y1);
    contex.closePath();
    contex.stroke();

    positionx = x1;
    positiony = y1; */
 }, {probabilityThreshold: 0.75});
}

async function run() {

    //const model = await tf.loadModel('indexeddb://tfjs-speech-commands-model/model-2019-09-15T15.03.09');
    
    const model = await tf.loadLayersModel('indexeddb://tfjs-speech-commands-model/model-2019-09-15T15.03.09');

	
	const saveResult = await model.save('downloads://model2');
	console.log(saveResult);

 //recognizer = speechCommands.create('BROWSER_FFT');
 //await recognizer.ensureModelLoaded();

/*  const models = await tf.io.listModels();
 const keys = [];
 for (const key in models) {
   console.debug('model keys ', key);
 } */

 
//const loadedModel = await tf.loadLayersModel('indexeddb://tfjs-speech-commands-model/model-2019-09-15T15.03.09');

 //const model = await tf.loadLayersModel('file:///model/2019-09-15T12.41.10.bin');
 //const saveResults = await loadedModel.save('downloads://custom-model');

/*  await tf.io.copyModel('indexeddb://tfjs-speech-commands-model/model-2019-09-15T15.03.09',
    'file:///D:/vscode_workspace/tfjs-client/tfjs-client/src/assets/model/model-2019-09-15T15.03.09'); */ 



 //predict();
}

run();