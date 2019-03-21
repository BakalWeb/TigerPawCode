namespace TigerPawCodeAPI.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string AboutMe { get; set; }

        public byte[] Avatar { get; set; }
    }
}
