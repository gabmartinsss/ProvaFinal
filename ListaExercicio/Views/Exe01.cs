using System;

namespace ListaExercicio.Views
{
    public class Exe01
    {
        public static void Renderizar()
        {
            Console.WriteLine("Digite a altura: ");
            int altura = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Digite a largura: ");
            int largura = Convert.ToInt32(Console.ReadLine());

            int area = largura * altura;
            Console.WriteLine($"Área total: {area}");
        }
    }
}