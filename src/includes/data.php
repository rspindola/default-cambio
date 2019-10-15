$headers = array('Accept' => 'application/json');
$query = array('foo' => 'hello', 'bar' => 'world');

$cotacoes = Unirest\Request::get('http://gerenciadordecambio.tk/api/cotacoes/3', $headers, $query);
$cotacoes = $cotacoes->body;

$pacotes = Unirest\Request::get('http://gerenciadordecambio.tk/api/turismo/3', $headers, $query);
$pacotes = $pacotes->body;

$servicos = Unirest\Request::get('http://gerenciadordecambio.tk/api/servicos/3', $headers, $query);
$servicos = $servicos->body;

// $noticias = Unirest\Request::get('http://gerenciadordecambio.tk/api/noticias/3', $headers, $query);
// $noticias = $noticias->body;