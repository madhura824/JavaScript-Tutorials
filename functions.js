<!DOCTYPE html>
<html>
<head>
    <h1>This is my first website</h1>
</head>
<body>
    
<p id="demo">Addition is </p>

<script>
    function add(p1, p2){
        return p1 + p2;
    }
    let ans = add(10, 20);
    document.getElementById("demo").innerHTML = "Addition is " + ans;
</script>

</body>
</html>