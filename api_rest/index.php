<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

// Criando e configurando Slim app
$config = ['settings' => [
    'addContentLengthHeader' => false,
    'displayErrorDetails' => true,
]];

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$app = new \Slim\App($config);

$app->get('/', function(){
	    echo ' <h2>URIs da API RESTFul : </h2> <p>
		 <ul> 
		<li>localhost/api_rest/projetos</li>
		<li>localhost/api_rest/projetos/id </li>
		<li>localhost/api_rest/tarefas </li>
		<li>localhost/api_rest/tarefas/id </li>';
});


//metodos http do projetos
$app->get('/projetos', function(){
    $stmt = getConn()->query("SELECT * FROM projeto");
    $projetos = $stmt->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($projetos);
});
$app->post('/projetos',function($request, $response){
    $projeto = json_decode($request->getBody());
    $sql = "INSERT INTO projeto(projeto) values (:nome) ";
    $conn = getConn();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("nome",$projeto->projeto);
    $stmt->execute();
    $projeto->id = $conn->lastInsertId();
    echo json_encode($projeto);
});
$app->get('/projetos/{id}',function($request, $response, $args){
    $id = $args['id'];
    $sql = "SELECT * FROM projeto WHERE id=:id";
    $conn = getConn();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $projeto = $stmt->fetchObject();
    
    echo json_encode($projeto);
});
$app->put('/projetos/{id}',function($request, $response, $args){
    $conn = getConn();
    $id = $args['id'];
    $projeto = json_decode($request->getBody());

    $sql = "UPDATE projeto SET projeto = :projeto WHERE id=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("projeto",$projeto->projeto);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    echo json_encode($projeto);
});
$app->delete('/projetos/{id}', function($request, $response, $args){
    $conn = getConn();
    $id = $args['id'];
    $sql = "DELETE FROM projeto WHERE id=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    echo json_encode('excluido');
});

//metodos http da tarefas
$app->get('/tarefas', function(){
    $stmt = getConn()->query("SELECT * FROM tarefa");
    $tarefas = $stmt->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($tarefas);
});
$app->post('/tarefas',function($request, $response){
    $tarefa = json_decode($request->getBody());
    $sql = "INSERT INTO tarefa(descricao, prioridade, data, idProjeto) values (:descricao, :prioridade, :data, :idProjeto) ";
    $conn = getConn();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("descricao",$tarefa->descricao);
    $stmt->bindParam("prioridade",$tarefa->prioridade);
    $stmt->bindParam("data",$tarefa->data);
    $stmt->bindParam("idProjeto",$tarefa->idProjeto);
    $stmt->execute();
    $tarefa->id = $conn->lastInsertId();
    echo json_encode($tarefa);
});
$app->get('/tarefas/{id}',function($request, $response, $args){
    $id = $args['id'];
    $sql = "SELECT * FROM tarefa WHERE id=:id";
    $conn = getConn();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $tarefa = $stmt->fetchObject();
    
    echo json_encode($tarefa);
});
$app->put('/tarefas/{id}',function($request, $response, $args){
    $conn = getConn();
    $id = $args['id'];
    $tarefa = json_decode($request->getBody());

    $sql = "UPDATE tarefa SET descricao = :descricao, prioridade = :prioridade, data = :data, idProjeto = :idProjeto WHERE id=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("descricao",$tarefa->descricao);
    $stmt->bindParam("prioridade",$tarefa->prioridade);
    $stmt->bindParam("data",$tarefa->data);
    $stmt->bindParam("idProjeto",$tarefa->idProjeto);
    $stmt->bindParam("id",$id);

    $stmt->execute();
    echo json_encode($tarefa);
});
$app->delete('/tarefas/{id}', function($request, $response, $args){
    $conn = getConn();
    $id = $args['id'];
    $sql = "DELETE FROM tarefa WHERE id=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    echo json_encode('excluido');
});
$app->run();

#conexao com o banco rest
function getConn(){
    return new PDO('mysql:host=localhost;dbname=rest','root','root',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

}




?>
