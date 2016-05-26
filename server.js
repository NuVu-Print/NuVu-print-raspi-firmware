#!/usr/bin/env node
var serialport = require('serialport')
var SerialPort = serialport.SerialPort
var every = require('every-time-mirror')


var port = new SerialPort('/dev/tty.usbmodem1411', {
  baudrate: 115200,
  parser: serialport.parsers.readline('\n')
})

port.on('open', () => {
  port.on('data', (data) => {
    console.log(data)
  })
  every('1s', () => {
    console.log('sending G28')
    port.write('G28\n')
  })
})
