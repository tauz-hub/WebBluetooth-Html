/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 */

//globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;
var oldColorPickerValue;


function setup() {

  createCanvas(windowWidth, windowHeight);


  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(15, 15);

  const LEDonButton = createButton('LED ON');
  LEDonButton.mousePressed(LEDon);
  LEDonButton.position(15, 60);

  const LEDoffButton = createButton('LED OFF');
  LEDoffButton.mousePressed(LEDoff);
  LEDoffButton.position(LEDonButton.x + LEDonButton.width + 10, 60);

  ledColorPicker = createColorPicker('#ff0000');
  ledColorPicker.position(LEDoffButton.x + LEDoffButton.width + 10, 60);
  millisecondTimerStart = millis();
}


function draw() {
  drawScreen();
}
