using System.ComponentModel;

namespace System
{
    public static class EnumExtensions
    {
        /// <summary>
        /// Get value of Description attribute of Enumeration
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string GetDescription(this Enum value)
        {
            var attributes = (DescriptionAttribute[])value.GetType()
                .GetField(value.ToString())
                .GetCustomAttributes(typeof(DescriptionAttribute), false);

            return (attributes is { Length: > 0 }) ? attributes[0].Description : "";
        }
    }
}
