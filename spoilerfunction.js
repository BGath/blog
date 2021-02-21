    function spoilers() {
      var mySpoiler = document.getElementById('spoiler');

      var displaySetting = mySpoiler.style.display;

      var spoilerButton = document.getElementById('spoilerbtn');

      if (displaySetting == 'block') {
          mySpoiler.style.display = 'none';
          spoilerButton.innerHTML = 'Click for Spoiler';
      }
      else {
          mySpoiler.style.display = 'block';

          spoilerButton.innerHTML = 'Hide Spoiler';
      }

  }

  function searchbar() {
      
  }