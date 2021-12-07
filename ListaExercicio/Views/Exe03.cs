using System;

namespace ListaExercicio.Views
{
    public class Exe03
    {
        static int numero1, numero2;
        public static void Renderizar()
        {
            Console.WriteLine("Digite o primeiro número: ");
            numero1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite o segundo número: ");
            numero2 = Convert.ToInt32(Console.ReadLine());

            if (numero1 > numero2)
            {
                Console.WriteLine("Primeiro valor lido é o maior!");
            }
            else
            {
                Console.WriteLine("Segundo valor lido é o maior!");
            }
        }
    }
}