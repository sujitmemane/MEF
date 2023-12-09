import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
  import Textarea from "@mui/joy/Textarea";
  
  export default () => {
    return (
      <main className="flex overflow-hidden py-24 my-12"  id="contact">
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
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-12 lg:pb-12"
            >
            
                <TextField
                  className="w-1/2"
                  label="Name"
                  placeholder="Enter Name"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
               
           
            
                <TextField
                  type="email"
                  className="w-1/2"
                  label="Email"
                  placeholder="Enter Email"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
                    <TextField
                  type="text"
                  className="w-1/2"
                  label="Subject"
                  placeholder="Enter Subject"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              
             
    
              <div>
                <Textarea
                  color="neutral"
                  minRows={6}
                  placeholder="Enter Message"
                  size="md"
                  variant="outlined"
                />
              </div>
              <button
                className={`bg-brandPrimary text-white font-normal px-8 py-3 rounded font-bold w-full transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  };