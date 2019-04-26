function init() {
 Tabletop.init( { key: ‘1B_5y3Ma1HvR82xkkBZ9Vwn2Aui0h3fKkG2NqrXYl8AE',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
