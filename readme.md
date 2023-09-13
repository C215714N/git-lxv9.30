# GIT Desarrollo colaborativo

Esto es una guia para los alumnos de la capacitacion GIT y GitHub que cursan los dias Lunes, Miercoles y Viernes de 9:30hs a 12:30hs.

## Areas de GIT

1. __Working Directory__: Corresponde al _Area de Trabajo_, donde crearemos, editaremos y eliminaremos los diferentes archivos. Circunstancialmente utilizaremos la linea de comandos, a excepcion de algunas instrucciones.

    * __git init__: inicializa el repositorio de git
    * __git config user.name `<username>`__: define el nombre de usuario para el repositorio.
    * __git config user.email `<email>`__: establece el correo de contacto para el repositorio.
    * __rm -rf `.git`__ elimina el repositorio de git

1. __Staging Area (INDEX)__: Corresponde al _Area de control de Cambios_, donde se realizan las capturas de codigo y permite la utilizacion de las mismas para restaurar algun archivo o su futura confirmacion. Existen varios comandos que podemos utilizar en el INDEX.

    * __git status__: muestra el estado de los archivos comparandolos con la ultima captura de codigo realizada.
    * __git diff__: muestra las diferencias de codigo con respecto a la ultima captura registrada en el INDEX
    * __git add `<file>`__: agrega los cambios del archivo al area de control de cambios mediante una captura.

1. __Repository__: Corresponde al _Almacen de cambios_ donde se encuentran las confirmaciones en formato de archivo BLOB y desde aqui podemos desplazarnos en el historial de confirmaciones. El repositorio puede ser Local o remoto, pero los cambios directos siempre se manejan localmente.

    * __git commit__: abre el editor para emitir una confirmacion de los cambios realizados.
    * __git log__: muestra el registro de confirmaciones realizadas en formato de commits.
    * __git push__: envia los cambios locales a la rama correspondiente de repositorio remoto.

## Apuntadores

Correspoden a referencias que apuntan a determinado commit, segun corresponda, y se utilizan para desplazarnos dentro del historial de confirmaciones.

* __HEAD__ apuntador movil, que indica al usuario donde se encuentra dentro del repositorio.
* __BRANCH__ apuntador dinamico, que siempre apunta al ultimo commit de la linea de tiempo actual.
