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
$searchWrite = $_GET['id'];
$sql = "
select * 
from Table_1
where id='{$searchWrite}'";
$data = sqlsrv_query($conn,$sql);
    $records=array();
    while( $record = sqlsrv_fetch_array($data )){
        //mysql_fetch_array()函数的作用类似foreach对数组的作用：遍历（结果集）
        //它每次去的结果集的“一行数据”，并“装入”到数组 $record 中
        //该数组的下标就是该select的字段名，值就是对应行的数据值
       $records[]=$record;
    }
//    var_dump($records);
   require '测试4.html';
//为啥能那个顺利的展示，那个require  '测试4.html'; 就是把 测试4.html 页面照搬到这个php文件中
?>