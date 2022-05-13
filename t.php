<html>
<head>
<title>church</title>
</head>
<body>
<form method="post" action="processor.php">
<input type="submit" value="DISPLAY" />
</form>

<?php
$con=new mysqli("localhost","root","","Church");
if(!$con)
{
echo "COULD NOT CONNECT TO THE DATABASE";
}
$sql="SELECT * FROM members";
$result=$con->query($sql);
echo "<table border=1>";
echo"<th>";
echo"f_name";
echo"</th>";
echo"<th>";
echo"l_name";
echo"</th>";
while($row=$result->fetch_array())
{
echo"<tr>";
echo"<td>".$row['f_name']."</td>";
echo"<td>".$row['l_name']."</td>";
echo"<tr>"; }
echo"</table>";
?>
</body>
</html>
