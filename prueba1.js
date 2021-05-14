// PRUEBA
// Resolver los siguientes ejercicios en Python, Java, Swift, Kotlin o JavaScript

// Ejercicio 1
// Starting at the top left corner of an N x M grid and facing towards the right, you keep walking one square at a time in the direction you are facing. If you reach the boundary of the grid or if the next square you are about to visit has already been visited, you turn right. You stop when all the squares in the grid have been visited. What direction will you be facing when you stop? For example: Consider the case with N = 3, M = 3. The path followed will be (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) -> (2,0) -> (1,0) -> (1,1). At this point, all squares have been visited, and you are facing right.

// Especificación de entrada
// The first line contains T the number of test cases. Each of the next T lines contain two integers N and M, denoting the number of rows and columns respectively.

// Especificación de salida
// Output T lines, one for each test case, containing the required direction you will be facing at the end. Output L for left, R for right, U for up, and D for down. 1 <= T <= 5000, 1 <= N,M <= 10^9.

// Ejemplo de entrada
// 4
// 1 1
// 2 2
// 3 1
// 3 3

// Ejemplo de salida
// R
// L
// D
// R

// LOGICA DEL ALGORITMO
// Si N es mayor que M y M es par, la dirección final será arriba.
// Si N mayor que M y M es impar, la dirección final será abajo.
// Si N menor o igual que M y N es par, la dirección final será izquierda.
// Si N menor o igual a M y N es impar, la dirección final será derecha.

function findDirection(n, m)
{
    if (n > m) {
        if (m % 2 == 0)
            console.log("Up");
        else
            console.log("Down");
    }
    else {
        if (n % 2 == 0)
            console.log("Left");
        else
            console.log("Right");
    }
};
 

 
findDirection(5, 8);