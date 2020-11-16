using SequentialGuid;
using System;

namespace DB
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; } = SequentialGuidGenerator.Instance.NewGuid();
        /// <summary>
        /// Creation date time for UTC
        /// </summary>
        public DateTimeOffset CreationTime => Id.ToDateTime() ?? DateTimeOffset.UtcNow;
    }
}
