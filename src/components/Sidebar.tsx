import Image from "next/image";
import profilePicture from "/public/pexels-anjana-c-674010.jpg";
function Sidebar() {
  return (
    <div>
      <Image
        src={profilePicture}
        alt="my picture"
        width={40}
        height={40}
        style={{
          margin: "auto",
        }}
      />

      <h3>
        <span>Abhishek Shrivastava</span>
      </h3>
      <p>Software Developer</p>
      <p>Download</p>

      {/* Social Media Icons */}

      {/* address */}
      <div>
        <div>
          <span>Dhaulpur, India</span>
        </div>
        <p>abhishekshrivastav1920@gmail.com</p>
        <p>9602491323</p>
      </div>
      {/* buttons  */}

      <button>Email</button>
      <button>UI</button>
    </div>
  );
}

export default Sidebar;
