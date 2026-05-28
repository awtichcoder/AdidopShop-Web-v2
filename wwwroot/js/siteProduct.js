// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import { initHeaderScroll } from './initHeaderScroll.js'
import { initMenuDrawer } from './initMenuDrawer.js'
import { moveUnderline } from './moveUnderline.js'

document.addEventListener('DOMContentLoaded', function () {
  moveUnderline()
  // menu drawer
  initMenuDrawer()
})
