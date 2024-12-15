public static string CreatePhoneNumber(int[] numbers)
{
    if (numbers == null || numbers.Length != 10)
    {
        throw new ArgumentException("Array must've exatcly 10 integers");
    }

    return string.Format("({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}", 
                            numbers[0], numbers[1], numbers[2],
                            numbers[3], numbers[4], numbers[5], 
                            numbers[6], numbers[7], numbers[8], numbers[9]); 
}