<html>
<header>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</header>
<body>
  <script>
    $(document).ready(function () {
      $.get('http://google.com', () => {
        alert('This Works!')
      });
    });
  </script>
</body>
</html>