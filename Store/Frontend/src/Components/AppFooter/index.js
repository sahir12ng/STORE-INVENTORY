import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+57 3507060893">+57 3507060893</Typography.Link>
      <Typography.Link href="https://www.instagram.com/olos12np/" target={"_blank"}>
        Creado y diseñado
      </Typography.Link>
      <Typography.Link href="https://twitter.com/saho74025213" target={"_blank"}>
        Contacto
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
