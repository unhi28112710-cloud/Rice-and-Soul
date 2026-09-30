const messages = [
  "Mong bạn luôn tìm thấy một khoảng trời bình yên, ngay cả trong những ngày nhiều mây nhất.",
  "Chúc bạn đủ dịu dàng với bản thân và đủ can đảm để bắt đầu lại.",
  "Đôi khi, những điều nhỏ bé lại giữ trong mình sức mạnh lớn lao.",
  "Mong hôm nay mang đến cho bạn một lý do để mỉm cười.",
  "Hãy đi chậm thôi. Những điều đẹp đẽ vẫn đang đợi bạn trên đường.",
  "Bạn không cần phải tỏa sáng mỗi ngày. Chỉ cần đừng quên ánh sáng của chính mình.",
  "Từ một hạt gạo nhỏ, ta học được rằng điều giản dị cũng có thể nuôi dưỡng những ước mơ lớn.",
  "Chúc bạn mang theo sự bình yên như mang theo một miền quê trong tim."
];

module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const index = Math.floor(Math.random() * messages.length);
  res.status(200).json({ message: messages[index], id: index });
};
