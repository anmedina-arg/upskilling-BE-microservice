Aqui voy a ir poniendo algunos apuntes sobre el proyecto:

## Como crear una imagen en Docker:

C:\\User\[proyecto]> docker build -t [nombre-de-la-imagen] .

Nota: el "." indica el path en donde esta el archivo Dockerfile, si estamos en el mismo path se usa un punto " . "

## Como crear una red en docker:

C:\User\Compu> docker network create [nombre_de_la_red]

## Como levantar un contenedor dentro de una red:

usaremos el siguiente comando, es importante tener en cuenta la direccion, el enrutado en donde ejecutamos el codigo!

C:\User\[carpeta-que-contiene-la-imagen]> docker run --network=[nombre-de-la-red] --name=[nombre-de-la-imagen-en-la-red] -p [puerto-imagen]:[puerto-PC] [nombre-imagen]

Ejemplo:
C:\User\...\backend\star-wars-api-microservices\caracters> docker run --network=starwars --name=characters -p 8001:8001 characters
