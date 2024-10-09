// components/molecules/SocialMedia.js

import Icon from "@/components/atoms/iconss";
import Link from "@/components/atoms/links";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h4>SOSIAL MEDIA</h4>
      <Link href="https://facebook.com">Facebook</Link>
      <Icon src="/path/to/instagram-icon.png" alt="Instagram" />
      <Icon src="/path/to/whatsapp-icon.png" alt="WhatsApp" />
    </div>
  );
};

export default SocialMedia;
