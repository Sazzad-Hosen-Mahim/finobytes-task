import { Link } from "react-router-dom";
import CommonWrapper from "../components/common/CommonWrapper";
import { GrUserAdmin } from "react-icons/gr";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";

// Interface for login option configuration
interface LoginOption {
  to: string;
  icon: React.ReactNode;
  label: string;
  testId?: string;
}

const Homepage = () => {
  // Configuration array for login options
  const loginOptions: LoginOption[] = [
    {
      to: "/login/admin",
      icon: <GrUserAdmin />,
      label: "Admin",
      testId: "admin-login-link",
    },
    {
      to: "/login/merchant",
      icon: <RiShoppingBag4Line />,
      label: "Merchant",
      testId: "merchant-login-link",
    },
    {
      to: "/login/member",
      icon: <IoIosPerson />,
      label: "Member",
      testId: "member-login-link",
    },
  ];

  return (
    <CommonWrapper>
      <div className="min-h-screen bg-[#B9D4AA] flex items-center justify-center lg:py-20">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-center ">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Welcome to Finobytes
              </h1>
              <p className="text-lg md:text-xl font-semibold text-gray-700">
                Please choose your login type
              </p>
            </div>

            <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0 w-full">
              {loginOptions.map((option) => (
                <Link
                  key={option.to}
                  to={option.to}
                  data-testid={option.testId}
                  className="border border-gray-300 shadow-xl text-gray-900 text-xl font-semibold px-6 py-4 rounded-lg hover:bg-white hover:shadow-2xl transition-all duration-200 flex items-center gap-4 bg-white/80 backdrop-blur-sm"
                >
                  <span className="text-2xl">{option.icon}</span>
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Homepage;
