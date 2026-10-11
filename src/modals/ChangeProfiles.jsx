import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiCamera } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useRedux } from '../hooks/useRedux';
import { resetSetUser, setUser } from '../redux/slice/auth';

function ChangeProfiles({ modal, setModal, setPreviewPhoto, previewPhoto }) {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });

  const {
    auth: {
      user,
      setUser: { isFulfilled },
    },
    dispatch,
  } = useRedux();

  useEffect(() => {
    if (isFulfilled) {
      setModal(!modal);
      dispatch(resetSetUser());
    }
  }, [dispatch, isFulfilled, setModal, modal]);

  const imageRegister = register('image');

  function changeProfile(e) {
    const formData = new FormData();
    formData.append('name', e.name);
    formData.append('address', e.address);
    formData.append('job', e.job);
    formData.append('office', e.office);
    formData.append('description', e.description);

    if (e.image && e.image[0]) {
      formData.append('image', e.image[0]);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    dispatch(setUser(formData));
    console.log('Form Data:', formData);
  }

  return (
    <section className="fixed w-full h-screen bg-black/10 inset-0 z-50 flex items-center justify-center">
      <div className="bg-light text-dark-primary max-w-md min-w-sm rounded-2xl border-border-header relative">
        <IoClose
          onClick={() => {
            setModal(!modal);
          }}
          className="absolute right-10 top-10 hover:border hover:rounded-full hover:text-font-error cursor-pointer"
        />
        <span className="border-b border-border-header f-16 font-semibold text-dark-primary flex w-full p-24">
          Edit Profile
        </span>

        <form
          className="px-24"
          onSubmit={handleSubmit(changeProfile)}
        >
          <div className="flex justify-center mt-12">
            <label
              htmlFor="image"
              className="cursor-pointer"
            >
              <div className="w-140 h-140 rounded-full border border-border-header overflow-hidden flex items-center justify-center bg-gray-100">
                {previewPhoto ? (
                  <img
                    src={previewPhoto}
                    alt="Preview Foto"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <FiCamera className="w-1/2 h-1/2 text-gray-400" />
                )}
              </div>
              <input
                type="file"
                id="image"
                {...imageRegister}
                onChange={(e) => {
                  imageRegister.onChange(e);
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewPhoto(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex flex-col gap-6 pt-16">
            <label
              htmlFor="name"
              className="font-medium f-14 text-font-fivethy"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              defaultValue={user?.name.toUpperCase()}
              className="px-12 py-10 text-xs border border-border-header rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-6 pt-16">
            <label
              htmlFor="address"
              className="font-medium f-14 text-font-fivethy"
            >
              Location
            </label>
            <input
              type="text"
              id="address"
              {...register('address')}
              defaultValue={user?.address}
              className="px-12 py-10 text-xs border border-border-header rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-6 pt-16">
            <label
              htmlFor="job"
              className="font-medium f-14 text-font-fivethy"
            >
              Job
            </label>
            <input
              type="text"
              id="job"
              {...register('job')}
              defaultValue={user?.job}
              className="px-12 py-10 text-xs border border-border-header rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-6 pt-16">
            <label
              htmlFor="office"
              className="font-medium f-14 text-font-fivethy"
            >
              Office
            </label>
            <input
              type="text"
              id="office"
              {...register('office')}
              defaultValue={user?.office}
              className="px-12 py-10 text-xs border border-border-header rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-6 pt-16">
            <label
              htmlFor="description"
              className="font-medium f-14 text-font-fivethy"
            >
              Bio
            </label>
            <textarea
              id="description"
              {...register('description')}
              placeholder="Tell the community a little about yourself..."
              defaultValue={user?.description}
              className="px-12 py-10 text-xs border border-border-header rounded-md min-h-100 outline-none"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-5 my-24 justify-end">
            <span
              onClick={() => {
                setModal(!modal);
                setPreviewPhoto(user.image);
              }}
              className="text-dark-primary bg-border-header px-16 py-8 round-8 f-14 cursor-pointer"
            >
              Cancel
            </span>
            <button
              type="submit"
              className="text-light bg-primary px-16 py-8 round-8 f-14 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChangeProfiles;
