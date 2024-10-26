const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },
  init: () => {
    App.registerAllEventListner()
  },
  registerAllEventListner: () => {
    // done
    App.$.menu.addEventListener('click', (e) => {
      App.$.menuItems.classList.toggle('hidden')
    })
    // TODO
    App.$.resetBtn.addEventListener('click', (e) => {
      console.log('reset Btn')
    })
    // TODO
    App.$.newRoundBtn.addEventListener('click', (e) => {
      console.log('add a new round')
    })
    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener('click', (e) => {
        console.log(`square with id ${e.target.id} was clicked`)
      })
    })
  },
}

window.addEventListener('load', App.init)
