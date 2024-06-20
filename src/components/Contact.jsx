import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@mui/joy";
import { toast } from "react-toastify";

export default () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://api.scholarsquestolympiad.org/api/v1/mef/inquiry/new",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (result?.success === true) {
        toast.success(result?.message, { autoClose: 3000 });
      } else {
        toast.error(result?.message || "An error occurred during Login.");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <main className="flex overflow-hidden py-24 my-12" id="contact">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto text-neutralDGrey">
        <div className="max-w-lg flex-1 mx-auto px-4 text-neutralDGrey">
          <div>
            <h3 className=" text-2xl font-thin">Have Question?</h3>
            <p className="mt-1 font-bold text-2xl  text-brandPrimary uppercase">
              Send Us A Message
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 mt-12 lg:pb-12"
          >
            <TextField
              className="w-1/2"
              label="Name"
              placeholder="Enter Name"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("name", {
                required: {
                  value: true,
                  message: "Please Enter A Name",
                },
              })}
            />
            <p className="text-red-400 text-xs">{errors?.name?.message}</p>

            <TextField
              type="email"
              className="w-1/2"
              label="Email"
              placeholder="Enter Email"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("email", {
                required: {
                  value: true,
                  message: "Please Enter A Email",
                },
              })}
            />
            <p className="text-red-400 text-xs">{errors?.email?.message}</p>
            <TextField
              type="text"
              className="w-1/2"
              label="Subject"
              placeholder="Enter Subject"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please Enter A Subject",
                },
              })}
            />
            <p className="text-red-400 text-xs">{errors?.subject?.message}</p>
            <div>
              <Textarea
                color="neutral"
                minRows={6}
                placeholder="Enter Message"
                size="md"
                variant="outlined"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Please Enter A Message",
                  },
                })}
              />
              <p className="text-red-400 text-xs">{errors?.message?.message}</p>
            </div>
            <button
              disabled={isSubmitting}
              className={`bg-brandPrimary text-white font-normal px-8 py-3 rounded font-bold w-full transition duration-300 ease-in-out transform hover:scale-105`}
            >
              {isSubmitting ? "Sending" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
