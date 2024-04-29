import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../dictionaries";

export default async function PhotoDetailsModal({ params: { id, lang } }) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photo = await response.json();
  const dict = await getDictionary(lang);
  return (
    <Modal>
      <PhotoDetails photo={photo} dict={dict} />
    </Modal>
  );
}
