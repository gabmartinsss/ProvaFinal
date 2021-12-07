using System;

namespace ListaExercicio.Views
{
    public class Exe02
    {
        static double real, dolar, euro, pesoArgentino;
        public static void Renderizar()
        {
            Console.WriteLine("Digite o valor em R$: ");
            real = Convert.ToDouble(Console.ReadLine());
            dolar = real / 5.17;
            euro = real / 6.14;
            pesoArgentino = real / 0.05;
            Console.WriteLine($"Dólar: {dolar.ToString("F2")}");
            Console.WriteLine($"Euro: {euro.ToString("F2")}");
            Console.WriteLine($"Peso argentino: {pesoArgentino.ToString("F2")}");
        }
        
    }
}