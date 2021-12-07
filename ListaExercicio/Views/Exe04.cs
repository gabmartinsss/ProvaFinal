using System;

namespace ListaExercicio.Views
{
    public class Exe04
    {
        static int[] numeros= new int[100];
        public static void Renderizar()
        {
            Random random = new Random();
            //Preenchendo o array com valores aleatórios
            for (int i = 0; i < numeros.Length; i++)
            {
                numeros[i] = random.Next(1000);
            }
            //Imprimindo o array no console
            Array.Sort(numeros);  //Ordenar array
            foreach (int numero in numeros)
            {
                Console.Write($"{ numero } ");
            }
        }
    }
}