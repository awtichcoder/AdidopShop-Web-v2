// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import { initPasswordToggle } from './initPasswordToggle.js'
import { initMenuDrawer } from './initMenuDrawer.js'
import { moveUnderline } from './moveUnderline.js'
import { initAddressSelector } from '/js/addressSelector.js'

document.addEventListener('DOMContentLoaded', function () {
  initAddressSelector('province_city', 'district', 'ward')
  // mat
  initPasswordToggle()
  //gach chan
  moveUnderline()
  // menu drawer
  initMenuDrawer()
})
