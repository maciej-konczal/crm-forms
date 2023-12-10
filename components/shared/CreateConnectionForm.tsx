import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  targetSystem: string;
  orgUrl: string;
  username: string;
  password: string;
  clientId: string;
  clientSecret: string;
};

export default function CreateConnectionForm() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast(
      "Wow so easy to add toast!\nInput data in JSON: " + JSON.stringify(data)
    );
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow rounded px-16 pt-6 pb-8 mb-4"
      >
        <div className="container text-center pb-8">
          <h1 className="text-2xl font-bold">
            {t("createConnectionForm.title")}
          </h1>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.targetSystem")}
          </label>
          <select
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("targetSystem", { required: true })}
          >
            <option value="salesforce">Salesforce</option>
            {/* <option value="other">other</option> */}
          </select>
          {errors.targetSystem && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.orgUrl")}
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("orgUrl", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.username")}
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.password")}
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.clientId")}
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("clientId", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {t("createConnectionForm.fields.clientSecret")}
          </label>
          <input
            className="shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            {...register("clientSecret", { required: true })}
          />
          {errors.username && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <button
          className="bg-teal-200 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
