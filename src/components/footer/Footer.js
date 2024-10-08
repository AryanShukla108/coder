import React from "react";
import sovmob from "../../assests/sovmob.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { Logos, Logos2 } from "../../assests/Appicons";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="fotter-sov-svg">
                    {/* <img src={coder} alt="coder" className="coder" /> */}
                    {/* <svg
                        className="fotter-sov-svg"
                        width="239"
                        height="103"
                        viewBox="0 0 239 103"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => (window.location.href = "/")}
                    >
                        <path
                            d="M133.948 82.8628V84.3852H130.919V94.24H129.053V84.3852H126.008V82.8628H133.948ZM144.105 89.5091C144.105 89.8474 144.083 90.1529 144.039 90.4258H137.147C137.202 91.1461 137.469 91.7245 137.95 92.161C138.43 92.5975 139.019 92.8158 139.718 92.8158C140.722 92.8158 141.431 92.3956 141.846 91.5553H143.859C143.586 92.3847 143.09 93.0668 142.369 93.6016C141.66 94.1254 140.776 94.3873 139.718 94.3873C138.855 94.3873 138.081 94.1963 137.393 93.8144C136.716 93.4215 136.182 92.8758 135.789 92.1774C135.407 91.468 135.216 90.6495 135.216 89.7219C135.216 88.7942 135.401 87.9812 135.772 87.2827C136.154 86.5734 136.684 86.0277 137.36 85.6457C138.048 85.2638 138.834 85.0728 139.718 85.0728C140.569 85.0728 141.327 85.2583 141.993 85.6294C142.659 86.0004 143.177 86.5243 143.548 87.2009C143.919 87.8666 144.105 88.636 144.105 89.5091ZM142.157 88.9197C142.146 88.2322 141.9 87.6811 141.42 87.2664C140.94 86.8517 140.345 86.6443 139.636 86.6443C138.992 86.6443 138.441 86.8517 137.982 87.2664C137.524 87.6702 137.251 88.2213 137.164 88.9197H142.157ZM145.319 89.7219C145.319 88.7942 145.505 87.9812 145.876 87.2827C146.258 86.5734 146.782 86.0277 147.447 85.6457C148.113 85.2638 148.877 85.0728 149.739 85.0728C150.83 85.0728 151.731 85.3347 152.44 85.8585C153.16 86.3715 153.646 87.1081 153.897 88.0685H151.884C151.72 87.6211 151.458 87.2718 151.098 87.0208C150.738 86.7698 150.285 86.6443 149.739 86.6443C148.975 86.6443 148.364 86.9171 147.906 87.4628C147.458 87.9976 147.234 88.7506 147.234 89.7219C147.234 90.6932 147.458 91.4516 147.906 91.9973C148.364 92.543 148.975 92.8158 149.739 92.8158C150.819 92.8158 151.534 92.3411 151.884 91.3916H153.897C153.635 92.3083 153.144 93.0395 152.424 93.5852C151.703 94.1199 150.809 94.3873 149.739 94.3873C148.877 94.3873 148.113 94.1963 147.447 93.8144C146.782 93.4215 146.258 92.8758 145.876 92.1774C145.505 91.468 145.319 90.6495 145.319 89.7219ZM160.422 85.0728C161.11 85.0728 161.721 85.2201 162.256 85.5148C162.801 85.8094 163.227 86.246 163.533 86.8244C163.849 87.4028 164.007 88.1012 164.007 88.9197V94.24H162.157V89.198C162.157 88.3904 161.956 87.7738 161.552 87.3482C161.148 86.9117 160.597 86.6934 159.898 86.6934C159.2 86.6934 158.643 86.9117 158.229 87.3482C157.825 87.7738 157.623 88.3904 157.623 89.198V94.24H155.757V82.1262H157.623V86.2678C157.939 85.8858 158.338 85.5912 158.818 85.3838C159.309 85.1765 159.844 85.0728 160.422 85.0728ZM170.939 85.0728C171.648 85.0728 172.281 85.2201 172.837 85.5148C173.405 85.8094 173.847 86.246 174.163 86.8244C174.48 87.4028 174.638 88.1012 174.638 88.9197V94.24H172.788V89.198C172.788 88.3904 172.586 87.7738 172.183 87.3482C171.779 86.9117 171.228 86.6934 170.529 86.6934C169.831 86.6934 169.274 86.9117 168.86 87.3482C168.456 87.7738 168.254 88.3904 168.254 89.198V94.24H166.388V85.2201H168.254V86.2514C168.559 85.8804 168.947 85.5912 169.416 85.3838C169.896 85.1765 170.404 85.0728 170.939 85.0728ZM180.931 94.3873C180.08 94.3873 179.31 94.1963 178.623 93.8144C177.935 93.4215 177.395 92.8758 177.002 92.1774C176.609 91.468 176.413 90.6495 176.413 89.7219C176.413 88.8051 176.615 87.9921 177.019 87.2827C177.422 86.5734 177.974 86.0277 178.672 85.6457C179.37 85.2638 180.151 85.0728 181.013 85.0728C181.875 85.0728 182.655 85.2638 183.354 85.6457C184.052 86.0277 184.603 86.5734 185.007 87.2827C185.411 87.9921 185.613 88.8051 185.613 89.7219C185.613 90.6386 185.406 91.4516 184.991 92.161C184.576 92.8704 184.009 93.4215 183.288 93.8144C182.579 94.1963 181.793 94.3873 180.931 94.3873ZM180.931 92.7667C181.411 92.7667 181.859 92.6521 182.273 92.4229C182.699 92.1937 183.043 91.85 183.305 91.3916C183.567 90.9332 183.698 90.3767 183.698 89.7219C183.698 89.0671 183.572 88.5159 183.321 88.0685C183.07 87.6101 182.737 87.2664 182.323 87.0372C181.908 86.808 181.46 86.6934 180.98 86.6934C180.5 86.6934 180.053 86.808 179.638 87.0372C179.234 87.2664 178.912 87.6101 178.672 88.0685C178.432 88.5159 178.312 89.0671 178.312 89.7219C178.312 90.6932 178.557 91.4462 179.049 91.9809C179.551 92.5048 180.178 92.7667 180.931 92.7667ZM189.324 82.1262V94.24H187.458V82.1262H189.324ZM195.686 94.3873C194.835 94.3873 194.066 94.1963 193.378 93.8144C192.691 93.4215 192.151 92.8758 191.758 92.1774C191.365 91.468 191.168 90.6495 191.168 89.7219C191.168 88.8051 191.37 87.9921 191.774 87.2827C192.178 86.5734 192.729 86.0277 193.427 85.6457C194.126 85.2638 194.906 85.0728 195.768 85.0728C196.63 85.0728 197.411 85.2638 198.109 85.6457C198.808 86.0277 199.359 86.5734 199.763 87.2827C200.166 87.9921 200.368 88.8051 200.368 89.7219C200.368 90.6386 200.161 91.4516 199.746 92.161C199.331 92.8704 198.764 93.4215 198.044 93.8144C197.334 94.1963 196.549 94.3873 195.686 94.3873ZM195.686 92.7667C196.167 92.7667 196.614 92.6521 197.029 92.4229C197.454 92.1937 197.798 91.85 198.06 91.3916C198.322 90.9332 198.453 90.3767 198.453 89.7219C198.453 89.0671 198.327 88.5159 198.076 88.0685C197.825 87.6101 197.493 87.2664 197.078 87.0372C196.663 86.808 196.216 86.6934 195.736 86.6934C195.255 86.6934 194.808 86.808 194.393 87.0372C193.989 87.2664 193.667 87.6101 193.427 88.0685C193.187 88.5159 193.067 89.0671 193.067 89.7219C193.067 90.6932 193.313 91.4462 193.804 91.9809C194.306 92.5048 194.933 92.7667 195.686 92.7667ZM205.847 85.0728C206.546 85.0728 207.162 85.2147 207.697 85.4984C208.243 85.7712 208.668 86.115 208.974 86.5297V85.2201H210.856V94.3873C210.856 95.2167 210.682 95.9534 210.333 96.5973C209.983 97.2521 209.476 97.765 208.81 98.1361C208.155 98.5071 207.37 98.6926 206.453 98.6926C205.231 98.6926 204.216 98.4034 203.408 97.825C202.601 97.2575 202.142 96.4827 202.033 95.5005H203.883C204.025 95.9698 204.325 96.3463 204.783 96.63C205.252 96.9247 205.809 97.072 206.453 97.072C207.206 97.072 207.812 96.8428 208.27 96.3845C208.739 95.9261 208.974 95.2604 208.974 94.3873V92.8813C208.657 93.3069 208.226 93.667 207.681 93.9617C207.146 94.2454 206.535 94.3873 205.847 94.3873C205.061 94.3873 204.341 94.1909 203.686 93.798C203.042 93.3942 202.53 92.8376 202.148 92.1283C201.777 91.408 201.591 90.5949 201.591 89.6891C201.591 88.7833 201.777 87.9812 202.148 87.2827C202.53 86.5843 203.042 86.0441 203.686 85.6621C204.341 85.2692 205.061 85.0728 205.847 85.0728ZM208.974 89.7219C208.974 89.0998 208.843 88.5596 208.581 88.1012C208.33 87.6429 207.997 87.2937 207.582 87.0536C207.168 86.8135 206.72 86.6934 206.24 86.6934C205.76 86.6934 205.312 86.8135 204.898 87.0536C204.483 87.2827 204.145 87.6265 203.883 88.0849C203.632 88.5323 203.506 89.0671 203.506 89.6891C203.506 90.3112 203.632 90.8569 203.883 91.3261C204.145 91.7954 204.483 92.1555 204.898 92.4066C205.323 92.6466 205.771 92.7667 206.24 92.7667C206.72 92.7667 207.168 92.6466 207.582 92.4066C207.997 92.1665 208.33 91.8172 208.581 91.3589C208.843 90.8896 208.974 90.3439 208.974 89.7219ZM214.257 84.0251C213.919 84.0251 213.635 83.9105 213.406 83.6813C213.177 83.4522 213.062 83.1684 213.062 82.8301C213.062 82.4918 213.177 82.208 213.406 81.9789C213.635 81.7497 213.919 81.6351 214.257 81.6351C214.584 81.6351 214.863 81.7497 215.092 81.9789C215.321 82.208 215.436 82.4918 215.436 82.8301C215.436 83.1684 215.321 83.4522 215.092 83.6813C214.863 83.9105 214.584 84.0251 214.257 84.0251ZM215.174 85.2201V94.24H213.308V85.2201H215.174ZM225.891 89.5091C225.891 89.8474 225.869 90.1529 225.825 90.4258H218.933C218.988 91.1461 219.255 91.7245 219.736 92.161C220.216 92.5975 220.805 92.8158 221.504 92.8158C222.508 92.8158 223.217 92.3956 223.632 91.5553H225.645C225.372 92.3847 224.876 93.0668 224.156 93.6016C223.446 94.1254 222.562 94.3873 221.504 94.3873C220.641 94.3873 219.867 94.1963 219.179 93.8144C218.502 93.4215 217.968 92.8758 217.575 92.1774C217.193 91.468 217.002 90.6495 217.002 89.7219C217.002 88.7942 217.187 87.9812 217.558 87.2827C217.94 86.5734 218.47 86.0277 219.146 85.6457C219.834 85.2638 220.62 85.0728 221.504 85.0728C222.355 85.0728 223.113 85.2583 223.779 85.6294C224.445 86.0004 224.963 86.5243 225.334 87.2009C225.705 87.8666 225.891 88.636 225.891 89.5091ZM223.943 88.9197C223.932 88.2322 223.686 87.6811 223.206 87.2664C222.726 86.8517 222.131 86.6443 221.422 86.6443C220.778 86.6443 220.227 86.8517 219.768 87.2664C219.31 87.6702 219.037 88.2213 218.95 88.9197H223.943ZM231.001 94.3873C230.292 94.3873 229.653 94.2618 229.086 94.0108C228.529 93.7489 228.087 93.3997 227.76 92.9631C227.433 92.5157 227.258 92.0191 227.236 91.4735H229.168C229.201 91.8554 229.381 92.1774 229.708 92.4393C230.046 92.6903 230.467 92.8158 230.969 92.8158C231.492 92.8158 231.896 92.7176 232.18 92.5211C232.475 92.3138 232.622 92.0519 232.622 91.7354C232.622 91.3971 232.458 91.1461 232.131 90.9824C231.814 90.8187 231.307 90.6386 230.608 90.4421C229.932 90.2566 229.381 90.0766 228.955 89.9019C228.529 89.7273 228.158 89.4599 227.842 89.0998C227.536 88.7397 227.383 88.2649 227.383 87.6756C227.383 87.1954 227.525 86.7589 227.809 86.366C228.093 85.9622 228.497 85.6457 229.02 85.4166C229.555 85.1874 230.166 85.0728 230.854 85.0728C231.88 85.0728 232.704 85.3347 233.326 85.8585C233.959 86.3715 234.297 87.0754 234.341 87.9703H232.475C232.442 87.5665 232.278 87.2445 231.983 87.0044C231.689 86.7644 231.29 86.6443 230.788 86.6443C230.297 86.6443 229.921 86.7371 229.659 86.9226C229.397 87.1081 229.266 87.3537 229.266 87.6592C229.266 87.8993 229.353 88.1012 229.528 88.2649C229.703 88.4286 229.915 88.5596 230.166 88.6578C230.417 88.7451 230.788 88.8597 231.28 89.0016C231.934 89.1762 232.469 89.3563 232.884 89.5418C233.309 89.7164 233.675 89.9783 233.981 90.3276C234.286 90.6768 234.444 91.1406 234.455 91.719C234.455 92.2319 234.313 92.6903 234.03 93.0941C233.746 93.4979 233.342 93.8144 232.818 94.0436C232.305 94.2727 231.7 94.3873 231.001 94.3873Z"
                            fill="#5B8E3E"
                        />
                        <path
                            d="M139.144 74.182C136.531 74.182 134.179 73.734 132.088 72.838C129.997 71.9047 128.355 70.598 127.16 68.918C125.965 67.238 125.368 65.278 125.368 63.038H132.2C132.349 64.718 133.003 66.0994 134.16 67.182C135.355 68.2647 137.016 68.806 139.144 68.806C141.347 68.806 143.064 68.2834 144.296 67.238C145.528 66.1554 146.144 64.774 146.144 63.094C146.144 61.7874 145.752 60.7234 144.968 59.902C144.221 59.0807 143.269 58.446 142.112 57.998C140.992 57.55 139.424 57.0647 137.408 56.542C134.869 55.87 132.797 55.198 131.192 54.526C129.624 53.8167 128.28 52.734 127.16 51.278C126.04 49.822 125.48 47.8807 125.48 45.454C125.48 43.214 126.04 41.254 127.16 39.574C128.28 37.894 129.848 36.606 131.864 35.71C133.88 34.814 136.213 34.366 138.864 34.366C142.635 34.366 145.715 35.318 148.104 37.222C150.531 39.0887 151.875 41.6647 152.136 44.95H145.08C144.968 43.5314 144.296 42.318 143.064 41.31C141.832 40.302 140.208 39.798 138.192 39.798C136.363 39.798 134.869 40.2647 133.712 41.198C132.555 42.1314 131.976 43.4754 131.976 45.23C131.976 46.4247 132.331 47.414 133.04 48.198C133.787 48.9447 134.72 49.542 135.84 49.99C136.96 50.438 138.491 50.9234 140.432 51.446C143.008 52.1554 145.099 52.8647 146.704 53.574C148.347 54.2834 149.728 55.3847 150.848 56.878C152.005 58.334 152.584 60.294 152.584 62.758C152.584 64.7367 152.043 66.6034 150.96 68.358C149.915 70.1127 148.365 71.5314 146.312 72.614C144.296 73.6594 141.907 74.182 139.144 74.182ZM177.869 74.182C174.248 74.182 170.906 73.342 167.845 71.662C164.821 69.9447 162.413 67.574 160.621 64.55C158.866 61.4887 157.989 58.054 157.989 54.246C157.989 50.438 158.866 47.022 160.621 43.998C162.413 40.974 164.821 38.622 167.845 36.942C170.906 35.2247 174.248 34.366 177.869 34.366C181.528 34.366 184.869 35.2247 187.893 36.942C190.954 38.622 193.362 40.974 195.117 43.998C196.872 47.022 197.749 50.438 197.749 54.246C197.749 58.054 196.872 61.4887 195.117 64.55C193.362 67.574 190.954 69.9447 187.893 71.662C184.869 73.342 181.528 74.182 177.869 74.182ZM177.869 68.638C180.445 68.638 182.741 68.0594 184.757 66.902C186.773 65.7074 188.341 64.0274 189.461 61.862C190.618 59.6594 191.197 57.1207 191.197 54.246C191.197 51.3714 190.618 48.8514 189.461 46.686C188.341 44.5207 186.773 42.8594 184.757 41.702C182.741 40.5447 180.445 39.966 177.869 39.966C175.293 39.966 172.997 40.5447 170.981 41.702C168.965 42.8594 167.378 44.5207 166.221 46.686C165.101 48.8514 164.541 51.3714 164.541 54.246C164.541 57.1207 165.101 59.6594 166.221 61.862C167.378 64.0274 168.965 65.7074 170.981 66.902C172.997 68.0594 175.293 68.638 177.869 68.638ZM237.575 34.87L222.959 73.79H215.567L200.895 34.87H207.727L219.263 67.238L230.855 34.87H237.575Z"
                            fill="#EA4232"
                        />
                        <path
                            d="M88.83 50.86C85.82 47.4 83.53 44.59 81.05 41.96C72.77 33.18 62.86 29.46 50.91 32.77C44.07 34.67 39.68 39.95 39.08 46.58C38.39 54.26 40.78 58.12 48.15 61.94C53.89 64.92 59.6 67.99 65.14 71.34C69.07 73.72 71.38 77.37 70.74 82.21C70.08 87.27 66.69 89.89 62.13 91.49C56.6 93.43 51.06 93.47 45.47 92.02C34.68 89.21 26.45 82.92 20.6 73.47C19.76 72.12 18.85 70.81 17.08 71.72C15.67 72.44 16.39 73.66 16.8 74.76C22.88 90.84 44.68 104.1 61.76 101.9C69.48 100.9 76.24 98.03 79.85 90.44C84.84 79.93 81.52 69.91 70.91 63.78C65.17 60.46 59.24 57.47 53.42 54.27C51.03 52.95 49.96 50.89 50.11 48.08C50.27 45.07 52.26 43.74 54.61 42.72C59.95 40.39 64.64 42.09 69.08 45.19C82.95 54.86 98.21 57.5 114.61 54.04C116.08 53.73 118.43 54.34 118.81 52.2C119.12 50.46 117.36 49.33 116.18 48.24C113.14 45.43 110.1 42.6 106.85 40.05C103.67 37.55 103.34 34.96 105.05 31.36C107.47 26.28 108.75 20.65 113.17 16.2C107.09 17.26 103.44 16.09 102.56 9.80997C102.24 7.56997 100.61 9.28997 99.67 9.99997C93.96 14.3 93.1 14.07 90.74 7.62997C89.8 5.05997 81.52 0.439969 79.42 1.64997C74.93 4.23997 70.64 3.75997 66.1 1.88997C58.37 -1.28003 51.4 -0.870031 46.17 6.67997C44.97 8.40997 42.93 8.89997 41.1 9.66997C24.95 16.41 14.87 28.46 10.55 45.29C9.82001 48.14 8.59001 49.96 6.15001 51.42C3.72001 52.87 1.16001 54.41 0.0100098 59.04C10 52.16 20.17 51.31 31.45 52.38C27.83 46.7 29.58 42.3 32.22 38.07C33.81 35.53 35.77 33.28 38.09 31.34C50.7 20.82 69.33 21.76 82.7 33.76C84.07 34.99 85.39 35.88 86.95 36.31C87.81 36.55 88.56 36.6 89.09 36.61C89.44 36.61 89.71 36.59 89.74 36.59C90.59 36.53 95.44 37.46 106.86 40.03C99.78 39.51 94.89 39.01 91.98 38.46C91.35 38.34 89.72 38.02 88.89 38.88C88.38 39.4 88.26 40.35 88.57 41.88C89.09 44.39 89.93 46.99 88.84 50.88L88.83 50.86Z"
                            fill="url(#paint0_linear_604_809)"
                        />
                        <path
                            d="M25.46 58.95C28.76 73.8 39.51 83.17 55 85.01C57.05 85.25 60.12 86.2599 60.93 84.1999C61.88 81.7699 60.07 79.1499 58.01 77.3099C57.28 76.6599 56.35 76.22 55.47 75.76C47.86 71.72 40.03 68.06 33.52 62.2C31.44 60.33 28.81 59.2099 25.46 58.9599V58.95Z"
                            fill="#FEBF24"
                        />
                        <path
                            d="M87.9901 93.6601C94.5901 87.3301 98.5801 79.9901 100.91 71.6401C101.25 70.4201 101.05 69.3501 99.5501 68.9601C96.5201 68.1901 93.5501 67.1701 90.3801 67.1201C88.7601 67.1001 87.9701 67.7801 87.9801 69.4701C88.0101 77.3101 87.9901 85.1601 87.9901 93.6501V93.6601Z"
                            fill="#FEBF24"
                        />
                        <path
                            d="M81.23 61.17C83.43 63.79 85.45 64.51 87.87 64.61C97.11 65.01 106.04 66.52 113.69 72.3C114.44 72.87 115.21 73.62 116.19 72.41C118.38 69.71 116.63 63.92 113.22 63.08C102.97 60.56 92.55 60.74 81.24 61.17H81.23Z"
                            fill="#FEBF24"
                        />
                        <path
                            d="M8.18005 69.8701C11.8601 68.0801 14.5701 66.7201 17.3201 65.4401C20.0801 64.1601 17.6901 62.3201 17.8201 60.7701C17.9101 59.7801 18.2701 58.1301 16.5101 58.1801C15.0001 58.2201 13.8401 59.1601 13.1001 60.6301C11.6801 63.4701 10.1201 66.2301 8.18005 69.8701Z"
                            fill="#FEBF24"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_604_809"
                                x1="9.76616e-06"
                                y1="51.06"
                                x2="118.85"
                                y2="51.06"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FEBF24" />
                                <stop offset="1" stop-color="#EA4232" />
                            </linearGradient>
                        </defs>
                    </svg> */}
             <Logos2 />
                </div>
                <div className="row mobile-div">
                    <div className="col-3 mob-chil">
                        {/* <div className="linkdin-text">
                        <LinkedInIcon /> Top 20 Indian Startups of 2024
                    </div> */}
                        <div className="normal-text space">
                            © 2024 SOV Technologies Private Limited. All rights reserved.
                        </div>
                        <div>
                            <div className="head">INDIA OFFICE</div>

                            <div className="haed-text">
                                <div>+91 9717569519</div>
                                <div> info@sovtechnologies.com</div>
                                plot no.921, Rani Avantibai Rd, Near Huda Market, Mohyal Colony,
                                Sector 40, Gurugram, Haryana 122001
                                <div>Open hours: 8.00-18.00 Mon-Fri,</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mob-chil">
                        <div>
                            <div className="head">Company</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/about-us")}
                            >
                                About Us
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/contact-us")}
                            >
                                Contact Us
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/career")}
                            >
                                Careers
                            </div>
                            {/* <div className="haed-text sp">Customers Review</div> */}
                            {/* <div className="haed-text sp">The Right Hire</div> */}
                            <div className="haed-text sp">Blogs</div>
                            {/* <div className="haed-text sp">Events</div> */}
                            <div className="haed-text sp">Sitemap</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/privacy")}
                            >
                                Privacy Policy
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/terms")}
                            >
                                Terms & Conditions
                            </div>
                        </div>
                        <div className="d-space">
                            <div className="head">For Customers</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                Submit Enquiry
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                Hire Developer
                            </div>
                        </div>
                        <div className="d-space">
                            <div className="head">For Developers</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/developer")}
                            >
                                Developers
                            </div>
                            <div className="haed-text sp">Developer Sign-up</div>
                            <div className="haed-text sp">Developer Login</div>
                        </div>
                    </div>
                    <div className="col-3 mob-chil">
                        <div>
                            <div className="head">Tech talent for Companies</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-enterprise")}
                            >
                                Enterprise Software{" "}
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-companies")}
                            >
                                Healthcare
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-fintech")}
                            >
                                Fintech
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-startup")}
                            >
                                Startups
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() =>
                                    (window.location.href = "/usa-startup-bussinesses")
                                }
                            >
                                USA Startups & Businesses
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-salesforce")}
                            >
                                Salesforce Need
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-portfolio")}
                            >
                                VC Portfolio
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-pharma")}
                            >
                                Pharma Industry
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-service")}
                            >
                                ServiceNow
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-workday")}
                            >
                                Workday
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/healthcare-sap")}
                            >
                                SAP
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mob-chil">
                        <div className="icon-div">
                            <div>
                                <Link
                                    to="https://www.linkedin.com/company/sovtechnologies/"
                                    target="_blank"
                                >
                                    <LinkedInIcon className="icon-color" />{" "}
                                </Link>
                            </div>
                            <div>
                                {" "}
                                <Link
                                    to="https://www.instagram.com/sovtechnologies/"
                                    target="_blank"
                                >
                                    <InstagramIcon className="icon-color" />{" "}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="https://www.x.com/company/sovtechnologies/"
                                    target="_blank"
                                >
                                    <XIcon className="icon-color" />{" "}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="https://www.facebook.com/sovtechnologies/"
                                    target="_blank"
                                >
                                    <FacebookIcon className="icon-color" />{" "}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="https://www.youtube.com/sovtechnologies/"
                                    target="_blank"
                                >
                                    <YouTubeIcon className="icon-color" />{" "}
                                </Link>
                            </div>
                        </div>
                        <div className="d-space">
                            <div className="head">Locations</div>
                            <div className="haed-text sp">
                                Shop No 9, Veer Savarkar Marg, Panch Pakhdi,Thane,Mumbai, India
                            </div>
                            <div className="haed-text sp">
                                Rani Avantibai Rd, Near Huda Market,Mohyal Colony,Sector
                                40,Gurugram, India{" "}
                            </div>
                            <div className="haed-text sp">
                                D32, Krishna garden,2nd Floor,near NDRF road,Uttar Pradesh,
                                India{" "}
                            </div>
                        </div>

                        <div className="d-space">
                            <div className="head">Compare</div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Fiverr
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Credo
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Freelancer
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Freeup
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs PeoplePerHour
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Guru
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Andela
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Upwork
                            </div>
                            <div
                                className="haed-text sp"
                                onClick={() => (window.location.href = "/hire")}
                            >
                                SOV vs Top IT Services Companies
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer-mobile">
                <div>
                    <img src={sovmob} alt="coder" className="fotter-sov-svg" />
                </div>
                <div className="normal-text space">
                    © 2024 SOV Technologies Private Limited. All rights reserved.
                </div>

                <div className="mobile-div">
                    <div>
                        <div className="head">INDIA OFFICE</div>
                        <div className="haed-text">
                            <div>+91 9717569519</div>
                            <div> info@sovtechnologies.com</div>
                            plot no.921, Rani Avantibai Rd, Near Huda Market, Mohyal Colony,
                            Sector 40, Gurugram, Haryana 122001
                            <div>Open hours: 8.00-18.00 Mon-Fri,</div>
                        </div>
                    </div>
                    <div>
                        <div className="head">Company</div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/about-us")}
                        >
                            About Us
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/contact-us")}
                        >
                            Contact Us
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/career")}
                        >
                            Careers
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/privacy")}
                        >
                            Privacy Policy
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/terms")}
                        >
                            Terms
                        </div>
                    </div>
                </div>

                <div className="mobile-div">
                    <div className="">
                        <div className="head">For Customers</div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            Submit Enquiry
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            Hire Developer
                        </div>
                    </div>
                    <div className="">
                        <div className="head">For Developers</div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/developer")}
                        >
                            Developers
                        </div>
                        <div className="haed-text sp">Developer Sign-up</div>
                        <div className="haed-text sp">Developer Login</div>
                    </div>
                </div>

                <div className="mobile-div">
                    <div>
                        <div className="head">Tech talent for</div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-enterprise")}
                        >
                            Enterprise Software{" "}
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-companies")}
                        >
                            Healthcare
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-fintech")}
                        >
                            Fintech
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-startup")}
                        >
                            Startups
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/usa-startup-bussinesses")}
                        >
                            USA Startups & Businesses
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-salesforce")}
                        >
                            Salesforce Need
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-portfolio")}
                        >
                            VC Portfolio
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-pharma")}
                        >
                            Pharma Industry
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/healthcare-service")}
                        >
                            ServiceNow
                        </div>
                        {/* <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "healthcare-workday")}
                        >
                            Workday
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "healthcare-sap")}
                        >
                            SAP
                        </div> */}
                    </div>
                    <div>
                        <div className="head">Compare</div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Fiverr
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Credo
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Freelancer
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Freeup
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs PeoplePerHour
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Guru
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Andela
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Upwork
                        </div>
                        <div
                            className="haed-text sp"
                            onClick={() => (window.location.href = "/hire")}
                        >
                            SOV vs Top IT Services
                        </div>
                    </div>
                </div>
                <div className="mobile-div">
                    <div className="">
                        <div className="head">Locations</div>
                        <div className="haed-text sp">
                            Shop No 9, Veer Savarkar Marg, Panch Pakhdi,Thane,Mumbai, India
                        </div>
                        <div className="haed-text sp">
                            Rani Avantibai Rd, Near Huda Market,Mohyal Colony,Sector
                            40,Gurugram, India{" "}
                        </div>
                        <div className="haed-text sp">
                            D32, Krishna garden,2nd Floor,near NDRF road,Uttar Pradesh, India{" "}
                        </div>
                    </div>
                </div>
                <div className="mobile-div">
                    <div className="icon-div">
                        <div>
                            <Link
                                to="https://www.linkedin.com/company/sovtechnologies/"
                                target="_blank"
                            >
                                <LinkedInIcon className="icon-color" />{" "}
                            </Link>
                        </div>
                        <div>
                            {" "}
                            <Link
                                to="https://www.instagram.com/sovtechnologies/"
                                target="_blank"
                            >
                                <InstagramIcon className="icon-color" />{" "}
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="https://www.x.com/company/sovtechnologies/"
                                target="_blank"
                            >
                                <XIcon className="icon-color" />{" "}
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="https://www.facebook.com/sovtechnologies/"
                                target="_blank"
                            >
                                <FacebookIcon className="icon-color" />{" "}
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="https://www.youtube.com/sovtechnologies/"
                                target="_blank"
                            >
                                <YouTubeIcon className="icon-color" />{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
