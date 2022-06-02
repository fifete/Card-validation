## Índice

* [1. Resumen del proyecto](#1-Resumen-del-proyecto)
* [2. Investigación UX](#2-Investigación-UX)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Resumen del proyecto

KINGMAX es una plataforma que ofrece servicio de streaming de películas, documentales, especiales y series al que el usuario accede cuando paga una subscripción mensual de $8USD con su tarjeta.

## 2. Investigación UX 🔍
KINGMAX ofrece productos como: películas, documentales, especiales y series de diversos géneros. Por lo que esta dirigido a un público amplio de 18 a 50 años que, según las encuestas, es el rango de edad que contrata y ve con mayor frecuencia los servicios de streaming.

La validación de la tarjeta del usuario permitirá un pago exitoso y con ello, el acceso a los servicios de KINGMAX.

### Prototipo de baja fidelidad 📄
Se realiza un esquema general en una hoja de papel, para este proyecto se diseñaron dos pantallas. La pantalla de inicio y la de registro, la primera posee dos botones, de los cuales el botón iniciar sesion no lleva a otra pestaña dado que no es el propósito del proyecto. Sin embargo, el botón suscríbete ahora nos lleva a la siguiente pestaña, en la cual se introducirá la información de la tarjeta:
<div align="center">
<img src="https://github.com/fifete/Card-validation/blob/main/img-Readme/pesta%C3%B1a1.jpg" width="400" >
</div>
<div align="center">
<img src="https://github.com/fifete/Card-validation/blob/main/img-Readme/pesta%C3%B1a2.jpg" width="400" >
</div>
Una vez finalizada la introducción de datos el usuario aprieta el botón INGRESAR, el cual muestra los siguientes aspectos:

1. Validez de la tarjeta (7): si la tarjeta es válida el borde del input del número de tarjeta se torna verde. Por otro lado, si se introduce un número inválido o no se ha puesto nada aparece un texto inferior: “Escriba un número de tarjeta válido”
2. Tipo de tarjeta (8): Identifica si la tarjeta es visa, mastercard o american express y despliega un ícono del tipo de tarjeta. Por el contrario, si la tarjeta no pertenece a ninguna de estas tres categorías se despliega “Su tarjeta no pertenece a ninguna de las categorías indicadas abajo”.

#### Feedback
1. Validez de la tarjeta: si la tarjeta es válida agregar un borde verder. Por el contrario, se mostrará un borde rojo de advertencia
2. Tipo de tarjeta: debería mostrar el ícono del tipo de tarjeta al lado del número de la tarjeta
3. Botón ingresar: No tendría que validar la información de la tarjeta dado que este debería, teóricamente, redireccionarnos a otra pantalla. Por lo tanto, tanto la validación y tipo de la tarjeta debería aparecer al mismo tiempo que el usuario ingresa el número de tarjeta.

### Prototipo final del proyecto

  #### Pantalla de inicio:
  
  <div align="center">
    <img width="539" alt="tab_1" src="https://user-images.githubusercontent.com/103393649/171667201-496e1911-885f-49a8-90f7-18823d6fec89.png">
  </div>

  #### Segunda pantalla o pestaña de suscripción
  <div align="center">
    <img width="434" alt="tab_2" src="https://user-images.githubusercontent.com/103393649/171675417-1824d955-341d-4356-91cc-0e7295feae6c.png">
  </div>
  
