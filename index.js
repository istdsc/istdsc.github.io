<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'>    
  var publicSpreadsheetUrl = ‘https://docs.google.com/spreadsheets/d/1B_5y3Ma1HvR82xkkBZ9Vwn2Aui0h3fKkG2NqrXYl8AE/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo} )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
</script>
