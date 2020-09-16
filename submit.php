<?php
//连接数据库sqlsrv_connect()
$serverName = "MSI\SQLEXPRESS";//服务器的名字，本地localhost
$connectionInfo = array( "Database"=>"ku", "UID"=>"sa", "PWD"=>"123");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn ) {
     echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}
function toGBK($str){
    return iconv('UTF-8', 'GBK', $str);
}
function toU8($str){
    return iconv('GBK', 'UTF-8', $str);
}
$data1 = $_POST['name1'];
$id1=$_POST['name2'];
$data1=toU8($data1);
$id1=toU8($id1);
$sql = "
UPDATE Table_2
SET data = '$data1'
where id='$id1'
";

echo $sql;
$result = sqlsrv_query($conn, $sql) or die("数据更新失败！");
if($result == true){
    die("执行成功");
}else{
    die("执行失败");
    }
?>