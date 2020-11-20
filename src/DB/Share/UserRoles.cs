using System;
using System.ComponentModel;

namespace DB.Share
{
    [Flags]
    public enum UserRoles
    {
        [Description("Writer")]
        Writer = 0 << 1,
        [Description("Administrator")]
        Administrator = 0 << 2
    }
}
