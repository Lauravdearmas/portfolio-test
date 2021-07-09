import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const AnimateMatrazElements = (props) => (
  <svg
    id="Capa_1"
    className="exp"
    enable-background="new 0 0 511.75 511.75"
    height="80"
    viewBox="0 0 511.75 511.75"
    width="80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <motion.g
        animate={{
          rotate: [0, 20, 0],
        }}
        transition={{
          loop: Infinity,
          duration: 2,
        }}
      >
        <path
          d="m440.605 504.25h-369.46c-47.8 0-61.1-44.97-28.93-80.31l69.18-81.74h.01l86.35-102.03v-187.84h116.24v187.84l84.5 99.83 71.04 83.94c32.17 35.34 18.87 80.31-28.93 80.31z"
          fill="#d9ecfd"
        />
        <path
          d="m313.995 52.33h-116.24v.005h-.002v187.838l-86.348 102.03h-.01l-69.178 81.742c-32.169 35.338-18.871 80.305 28.929 80.305h30.569c-47.8 0-61.098-44.967-28.929-80.305l69.178-81.742h.01l86.348-102.03v-160.833c0-3.866 3.134-7 7-7h78.673z"
          fill="#c5e2ff"
        />
        <path
          d="m101.714 504.25h-30.569c-47.8 0-61.098-44.967-28.929-80.305l69.178-81.742h.01c6.898 4.728 13.685 8.702 20.379 12.024l-58.999 69.718c-32.167 35.338-18.87 80.305 28.93 80.305z"
          fill="#62dbfb"
        />
        <path
          d="m440.605 504.25h-369.46c-47.8 0-61.098-44.967-28.929-80.305l69.178-81.742h.01c94.225 64.572 168.1-9.578 287.086-2.201l71.043 83.943c32.17 35.338 18.872 80.305-28.928 80.305z"
          fill="#76fca3"
        />
        <path
          d="m101.714 504.25h-30.569c-47.8 0-61.098-44.967-28.929-80.305l69.178-81.742h.01c6.898 4.728 13.685 8.702 20.379 12.024l-58.999 69.718c-32.167 35.338-18.87 80.305 28.93 80.305z"
          fill="#5ede8b"
        />
        <g fill="#e0f9ff">
          <circle cx="362.185" cy="417.278" r="20.379" />
          <circle cx="121.753" cy="424.177" r="20.379" />
          <circle cx="245.612" cy="448.249" r="20.379" />
        </g>
        <path
          d="m332.685 14.5v30.84c0 3.86-3.13 7-7 7h-139.62c-3.86 0-7-3.14-7-7v-30.84c0-3.87 3.14-7 7-7h139.62c3.87 0 7 3.13 7 7z"
          fill="#d9ecfd"
        />
        <path
          d="m226.835 52.33-.04.01h-40.73c-3.86 0-7-3.14-7-7v-30.84c0-3.87 3.14-7 7-7h40.77c-3.24 0-5.86 2.62-5.86 5.87v33.1c0 3.24 2.62 5.86 5.86 5.86z"
          fill="#c5e2ff"
        />
        <circle cx="226.218" cy="303.29" fill="#76fca3" r="20.379" />
        <g>
          <path d="m475.176 418.995-153.681-181.573v-177.582h4.19c7.995 0 14.5-6.505 14.5-14.5v-30.84c0-7.995-6.505-14.5-14.5-14.5h-139.62c-7.995 0-14.5 6.505-14.5 14.5v30.84c0 7.995 6.505 14.5 14.5 14.5h4.19v68.61c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-68.61h38.61c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-57.3v-29.84h138.62v29.84h-48.63c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h29.94v40.104h-40.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.5v27.854h-40.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.5v27.854h-40.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h40.5v27.854h-40.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h41.289c.267.537 74.584 88.464 74.584 88.464-17.901-.035-36.141 1.621-56.212 5.069-4.083.701-6.823 4.579-6.122 8.661 2.04 4.705 4.927 6.745 8.661 6.122 24.105-4.14 45.384-5.581 66.659-4.509l68.957 81.473c.058.069.118.137.178.204 14.289 15.696 19.265 34.271 12.987 48.477-5.417 12.256-18.673 19.285-36.371 19.285h-369.46c-17.697 0-30.954-7.029-36.371-19.285-6.278-14.205-1.302-32.78 12.987-48.477.061-.067.12-.135.178-.204l64.888-76.665c58.428 37.023 120.616 20.811 183.11 6.336 4.035-.935 6.549-4.963 5.614-8.999-.935-4.035-4.965-6.549-8.999-5.614-57.774 13.383-115.36 30.315-169.93-3.296l80.857-95.532c1.146-1.354 1.775-3.071 1.775-4.845v-79.03c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v76.282l-153.68 181.572c-18.272 20.134-24.219 44.851-15.52 64.534 7.927 17.935 26.184 28.221 50.09 28.221h369.46c23.906 0 42.164-10.286 50.09-28.221 8.701-19.683 2.754-44.4-15.518-64.534z" />
          <g>
            <path d="m362.23 445.169c-9.466 0-19.463-5.765-24.189-13.952-7.694-13.326-2.448-30.78 10.204-38.084 13.314-7.686 30.398-3.108 38.084 10.205s3.108 30.397-10.205 38.084c-4.295 2.48-9.063 3.747-13.894 3.747zm-6.485-39.045c-6.429 4.563-8.001 10.427-4.714 17.594 4.563 6.43 10.427 8.001 17.594 4.714 6.15-3.551 8.265-11.444 4.714-17.594s-11.443-8.264-17.594-4.714z" />
          </g>
          <g>
            <path d="m226.263 331.182c-9.466 0-19.463-5.765-24.189-13.952-7.687-13.313-3.109-30.397 10.204-38.084 13.314-7.688 30.397-3.108 38.084 10.205 7.694 13.326 2.448 30.78-10.204 38.084-4.296 2.48-9.064 3.747-13.895 3.747zm-6.485-39.046c-6.15 3.551-8.265 11.444-4.714 17.594 4.563 6.429 10.427 8.001 17.594 4.714 6.429-4.563 8.001-10.427 4.714-17.594-3.551-6.15-11.441-8.265-17.594-4.714z" />
          </g>
          <g>
            <path d="m121.799 452.069c-9.466 0-19.464-5.766-24.19-13.952-7.687-13.313-3.108-30.397 10.205-38.084 13.314-7.687 30.397-3.108 38.084 10.205 7.694 13.326 2.447 30.78-10.205 38.084-4.296 2.48-9.064 3.747-13.894 3.747zm-6.486-39.046c-6.15 3.551-8.265 11.443-4.714 17.594 4.563 6.43 10.427 8.001 17.594 4.714 6.43-4.563 8.001-10.427 4.714-17.594-3.551-6.149-11.442-8.263-17.594-4.714z" />
          </g>
          <g>
            <path d="m245.658 476.123c-9.643 0-19.033-5-24.191-13.934-7.694-13.326-2.447-30.78 10.205-38.084 14.331-5.845 30.123-3.586 38.084 10.205 7.687 13.313 3.108 30.397-10.205 38.084-4.379 2.527-9.166 3.729-13.893 3.729zm-.067-40.759c-2.14.577-4.279 1.154-6.419 1.731-6.43 4.563-8.001 10.427-4.714 17.594 3.552 6.15 11.442 8.266 17.594 4.714 6.15-3.551 8.265-11.443 4.714-17.594-2.851-4.256-6.576-6.404-11.175-6.445zm-10.169-4.764h.01z" />
          </g>
        </g>
      </motion.g>
    </g>
  </svg>
);