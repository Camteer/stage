import { cn } from "@/lib/utils";
import React, { FC } from "react";
import style from "./brands.module.scss";

type TBrandsSvgUIProps = {
  type: string;
  className?: string;
};

export const BrandsSvgUI: FC<TBrandsSvgUIProps> = ({ type, className }) => {
  switch (type) {
    case "Porsche":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          className={cn("", style.svg)}
          viewBox="0 0 950.000000 550.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)"
            fill="grey"
            className={cn("", style.g)}
            stroke="none"
          >
            <path
              d="M5330 3816 c0 -123 -3 -237 -6 -254 l-6 -31 -648 -3 -647 -3 -54 -36
c-38 -25 -63 -52 -84 -90 l-30 -54 -3 -537 -3 -538 146 0 145 0 0 255 0 255
639 0 c709 0 674 -3 753 68 23 20 51 57 62 82 20 44 21 62 24 578 l3 532 -146
0 -145 0 0 -224z m-32 -542 c20 -14 22 -23 22 -118 0 -66 -4 -106 -12 -114 -9
-9 -150 -12 -574 -12 l-563 0 -15 22 c-11 16 -16 47 -16 106 0 75 2 85 25 107
l24 25 543 0 c476 0 546 -2 566 -16z"
            />
            <path
              d="M1180 1635 l0 -155 40 0 40 0 0 60 0 60 185 0 c221 0 225 2 225 98 0
93 4 92 -263 92 l-227 0 0 -155z m418 63 c4 -37 -10 -39 -188 -36 l-145 3 -3
33 -3 32 168 -2 168 -3 3 -27z"
            />
            <path
              d="M1757 1772 c-24 -26 -25 -253 -1 -276 23 -23 435 -24 458 -1 33 34
34 238 1 275 -17 19 -33 20 -230 20 -193 0 -213 -2 -228 -18z m401 -139 l3
-93 -176 0 -175 0 0 88 c0 49 3 92 7 96 4 3 81 5 172 4 l166 -3 3 -92z"
            />
            <path
              d="M2317 1783 c-4 -3 -7 -73 -7 -155 l0 -148 40 0 40 0 0 60 0 60 139 0
c77 0 147 -3 156 -6 20 -8 45 -56 45 -89 0 -22 4 -25 35 -25 35 0 35 1 35 43
0 23 -7 53 -16 65 -14 20 -14 24 0 44 25 35 21 110 -7 136 -22 21 -31 22 -238
22 -119 0 -219 -3 -222 -7z m401 -85 l-3 -33 -160 0 -160 0 -3 33 -3 32 166 0
166 0 -3 -32z"
            />
            <path
              d="M2900 1770 c-15 -15 -20 -33 -20 -75 0 -93 5 -95 225 -95 l185 0 0
-30 0 -30 -205 0 -205 0 0 -30 0 -30 213 -1 c116 -1 219 0 227 1 29 3 43 29
48 84 4 48 2 57 -21 80 -26 26 -26 26 -205 26 -163 0 -180 2 -184 18 -11 41
-4 42 203 42 l199 0 0 30 0 30 -220 0 c-207 0 -221 -1 -240 -20z"
            />
            <path
              d="M3472 1774 c-21 -14 -22 -22 -22 -139 0 -170 -15 -161 258 -157 l212
3 0 29 0 30 -197 2 -198 3 0 90 0 90 198 3 197 2 0 30 0 30 -213 0 c-176 0
-216 -3 -235 -16z"
            />
            <path
              d="M3990 1635 l0 -155 35 0 35 0 0 60 0 60 160 0 160 0 0 -60 0 -60 40
0 40 0 0 155 0 155 -40 0 -40 0 0 -60 0 -60 -160 0 -160 0 0 60 0 60 -35 0
-35 0 0 -155z"
            />
            <path
              d="M4540 1635 l0 -154 228 -3 c126 -2 236 -2 245 0 11 2 17 13 17 33 l0
29 -207 2 -208 3 -3 28 -3 27 205 0 206 0 0 35 0 35 -206 0 -205 0 3 28 3 27
208 3 207 2 0 30 0 30 -245 0 -245 0 0 -155z"
            />
            <path
              d="M5350 1635 l0 -155 228 0 c209 0 230 2 245 18 14 15 17 41 17 140 0
162 18 152 -267 152 l-223 0 0 -155z m415 0 l0 -90 -167 -3 -168 -2 0 95 0 95
168 -2 167 -3 0 -90z"
            />
            <path
              d="M5920 1635 l0 -155 245 0 245 0 0 30 0 30 -205 0 -205 0 0 30 0 30
200 0 200 0 0 35 0 35 -200 0 -200 0 0 30 0 30 205 0 205 0 0 30 0 30 -245 0
-245 0 0 -155z"
            />
            <path
              d="M6510 1770 c-15 -15 -20 -33 -20 -75 0 -93 5 -95 225 -95 l185 0 0
-30 0 -30 -205 0 -205 0 0 -30 0 -30 213 -1 c116 -1 219 0 227 1 28 3 43 29
48 82 3 43 0 58 -16 78 -20 25 -23 25 -209 30 l-188 5 0 25 0 25 203 3 202 2
0 30 0 30 -220 0 c-207 0 -221 -1 -240 -20z"
            />
            <path
              d="M7067 1783 c-4 -3 -7 -73 -7 -155 l0 -148 40 0 40 0 0 155 0 155 -33
0 c-19 0 -37 -3 -40 -7z"
            />
            <path
              d="M7245 1770 c-33 -37 -32 -242 2 -275 12 -12 51 -15 222 -15 250 0
241 -4 241 114 l0 77 -117 -3 -118 -3 0 -30 0 -30 83 -3 83 -3 -3 -27 -3 -27
-168 -3 -168 -2 3 92 3 93 203 3 202 2 0 30 0 30 -223 0 c-212 0 -225 -1 -242
-20z"
            />
            <path
              d="M7800 1637 c0 -85 2 -156 5 -159 3 -2 18 -3 35 0 l30 4 0 109 c0 60
3 109 6 109 3 0 78 -50 167 -110 135 -92 168 -110 200 -110 l37 0 0 155 0 155
-35 0 -35 0 0 -110 c0 -60 -4 -110 -9 -110 -8 0 -177 111 -284 186 -32 23 -58
34 -82 34 l-35 0 0 -153z"
            />
          </g>
        </svg>
      );
      break;
    case "Nike":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("", style.svg)}
          width="190"
          height="190"
          viewBox="0 0 500.000000 500.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            className={cn("", style.g)}
            fill="#000000"
            stroke="none"
          >
            <path
              d="M2274 3743 l-132 -4 -22 -52 c-12 -29 -87 -214 -167 -412 -80 -198
       -173 -425 -205 -505 -33 -80 -62 -155 -65 -168 l-6 -23 136 2 c75 1 140 5 145
       8 5 3 51 110 102 236 51 127 121 302 157 390 206 508 218 542 194 533 -3 -1
       -65 -4 -137 -5z"
            />
            <path
              d="M2686 3740 l-129 -5 -73 -180 c-39 -99 -140 -349 -224 -555 -84 -206
       -153 -383 -154 -393 -1 -16 10 -18 134 -19 l135 0 16 33 c9 19 49 118 90 221
       40 103 76 182 80 175 3 -6 14 -102 24 -212 10 -110 21 -203 24 -207 4 -4 107
       -8 229 -8 122 -1 222 -5 222 -9 0 -5 -12 -11 -27 -13 -16 -3 -98 -23 -183 -46
       -327 -86 -543 -142 -976 -252 -539 -138 -812 -185 -937 -160 -145 28 -246 112
       -288 242 -46 142 -27 337 52 521 16 38 29 73 29 77 0 22 -222 -221 -359 -395
       -159 -201 -251 -353 -302 -505 -27 -80 -33 -114 -37 -214 -7 -177 18 -267 106
       -374 57 -71 73 -84 140 -117 238 -117 578 -42 1397 307 116 50 228 98 250 108
       100 45 392 173 510 225 72 31 144 62 160 70 17 7 71 31 120 53 50 22 110 49
       135 60 25 11 286 127 580 257 559 247 1413 627 1465 652 27 13 27 14 5 10 -14
       -2 -81 -21 -150 -41 -69 -21 -163 -49 -210 -63 -232 -69 -340 -99 -632 -178
       -174 -47 -324 -88 -332 -91 -20 -8 -20 7 -2 51 8 18 12 36 8 39 -3 3 -77 6
       -164 6 -90 0 -158 4 -158 9 0 5 21 66 46 135 l47 125 140 3 140 3 32 81 c56
       139 66 124 -84 124 -98 0 -131 3 -131 13 0 6 22 62 48 122 l47 110 136 3 137
       3 41 96 c23 53 40 98 37 100 -2 3 -200 4 -440 4 l-436 0 -97 -101 c-53 -56
       -117 -123 -141 -150 -54 -60 -69 -64 -44 -12 10 20 38 85 61 144 38 95 45 132
       23 126 -4 -1 -65 -5 -136 -8z m589 -151 c-29 -73 -85 -210 -123 -304 -38 -93
       -110 -273 -161 -399 -109 -271 -108 -269 -114 -236 -6 32 -46 386 -53 470 -5
       61 -4 67 23 95 15 17 77 84 137 150 60 66 141 154 180 196 39 41 91 96 115
       123 24 26 45 46 47 44 2 -2 -21 -65 -51 -139z"
            />
            <path
              d="M1217 3733 c-3 -5 -48 -114 -100 -243 -153 -380 -287 -708 -327 -807
       -26 -61 -35 -93 -27 -96 22 -8 252 -8 262 0 15 12 43 76 182 431 14 34 28 62
       32 62 4 0 5 -109 3 -241 -4 -197 -2 -243 9 -250 23 -14 275 -11 286 4 9 12 49
       107 168 402 31 77 86 212 122 300 105 257 173 429 173 438 0 4 -62 7 -138 7
       l-139 0 -45 -107 c-25 -60 -65 -159 -89 -220 -24 -62 -47 -113 -51 -113 -5 0
       -8 99 -8 220 l0 220 -154 0 c-85 0 -157 -3 -159 -7z"
            />
          </g>
        </svg>
      );
      break;
    case "Puma":
      return <></>;
      break;
    case "Newbalance":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          className={cn("", style.svg)}
          viewBox="0 0 920.000000 920.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
            className={cn("", style.g)}
            fill="#000000"
            stroke="none"
          >
            <path
              d="M3395 6815 c-7 -11 -34 -56 -59 -100 l-46 -80 62 -7 c95 -11 1098
       -71 1103 -66 5 5 -60 256 -68 264 -2 3 -224 6 -492 7 -478 2 -488 2 -500 -18z"
            />
            <path
              d="M5160 6830 c-4 -3 -46 -72 -93 -155 l-86 -150 42 -7 c23 -3 195 -16
       382 -28 187 -12 341 -23 343 -25 1 -1 -2 -14 -9 -27 -13 -30 15 -26 -509 -59
       -190 -11 -346 -22 -346 -22 -1 -1 -56 -96 -122 -212 -140 -243 -145 -218 43
       -229 190 -10 600 -38 603 -41 1 -1 -2 -14 -9 -27 -12 -28 30 -23 -449 -53
       -135 -8 -515 -33 -845 -55 -330 -22 -674 -44 -765 -50 -425 -27 -613 -39 -615
       -42 -2 -2 -28 -46 -59 -98 -48 -82 -53 -96 -38 -102 9 -3 175 -16 367 -28 193
       -12 521 -32 730 -45 209 -13 571 -36 805 -50 234 -15 454 -30 490 -33 l65 -7
       -27 -28 c-22 -22 -36 -27 -75 -27 -46 0 -307 -14 -483 -25 -296 -19 -748 -45
       -781 -45 -24 0 -39 -5 -39 -12 0 -7 21 -95 47 -195 l48 -182 40 -5 c22 -3 238
       -17 480 -32 242 -15 442 -28 444 -30 2 -2 -4 -15 -13 -29 -12 -18 -25 -25 -47
       -25 -35 0 -700 -46 -795 -55 l-61 -6 41 -162 41 -162 915 0 915 0 115 24 c546
       113 935 434 990 818 28 200 -76 367 -273 438 l-58 21 58 18 c32 10 94 35 138
       56 362 172 579 475 563 784 -4 76 -10 101 -36 151 -70 139 -235 228 -462 251
       -81 8 -1598 12 -1610 4z m1181 -523 c130 -87 70 -310 -109 -405 -89 -48 -165
       -62 -335 -62 l-149 0 25 43 c13 23 77 133 141 245 l118 202 137 0 c127 0 141
       -2 172 -23z m-516 -980 c151 -85 87 -325 -112 -426 -100 -50 -170 -63 -360
       -68 -129 -3 -173 -1 -173 8 0 6 64 123 143 260 l142 248 160 1 c148 0 163 -2
       200 -23z"
            />
            <path
              d="M4120 6310 c-140 -10 -421 -28 -625 -40 -203 -11 -384 -23 -401 -26
       -28 -4 -38 -16 -87 -102 -30 -53 -54 -98 -52 -100 3 -3 470 -36 1328 -93 180
       -12 331 -19 334 -15 5 5 -45 207 -93 379 -7 22 -53 21 -404 -3z"
            />
            <path
              d="M3375 5134 c-93 -8 -354 -28 -580 -45 -225 -17 -411 -31 -411 -32 -9
       -10 -115 -199 -112 -202 7 -6 1157 -68 1170 -63 8 3 60 85 115 182 l102 176
       -57 -1 c-31 -1 -133 -8 -227 -15z"
            />
            <path
              d="M3150 4543 c-25 -1 -108 -7 -185 -13 -77 -5 -311 -21 -520 -36 -209
       -14 -385 -27 -392 -29 -10 -3 -123 -186 -123 -199 0 -3 274 -6 609 -6 l609 0
       79 137 c43 76 80 141 81 145 4 8 -60 8 -158 1z"
            />
            <path
              d="M3480 3385 l0 -445 76 0 76 0 -4 35 c-5 40 1 43 28 14 55 -61 190
       -86 299 -55 76 23 151 93 191 179 26 55 29 73 29 162 0 87 -3 107 -27 157 -32
       68 -97 136 -159 166 -95 46 -225 37 -312 -22 l-37 -25 0 139 0 140 -80 0 -80
       0 0 -445z m440 75 c117 -60 136 -260 34 -349 -131 -116 -324 -12 -324 174 1
       73 45 143 115 179 43 22 127 20 175 -4z"
            />
            <path d="M5020 3385 l0 -445 80 0 80 0 0 445 0 445 -80 0 -80 0 0 -445z" />
            <path
              d="M1187 3615 c-21 -8 -50 -23 -64 -35 -33 -26 -40 -25 -39 3 1 21 -4
       22 -71 25 l-73 3 0 -336 0 -335 80 0 80 0 0 210 c0 169 3 217 16 250 21 51 66
       80 128 80 39 0 53 -5 76 -28 43 -43 50 -87 50 -309 l0 -203 81 0 81 0 -4 248
       c-3 226 -5 251 -24 292 -53 115 -200 178 -317 135z"
            />
            <path
              d="M1810 3614 c-176 -64 -276 -263 -221 -440 51 -167 187 -263 354 -252
       117 8 207 60 269 157 42 67 40 71 -48 71 -75 0 -78 -1 -119 -39 -51 -47 -105
       -59 -173 -40 -49 14 -115 70 -124 107 l-6 22 258 0 259 0 6 44 c21 135 -74
       301 -203 359 -63 28 -190 33 -252 11z m185 -143 c48 -22 79 -54 100 -104 l15
       -37 -185 0 c-134 0 -185 3 -185 12 0 6 11 30 25 54 18 30 40 49 77 68 61 31
       98 32 153 7z"
            />
            <path
              d="M4470 3616 c-90 -24 -156 -81 -208 -179 -25 -48 -27 -61 -27 -162 0
       -101 2 -115 29 -169 55 -112 143 -174 261 -184 76 -6 155 16 213 58 23 16 44
       30 48 30 3 0 4 -15 2 -32 l-3 -33 73 -3 72 -3 0 336 0 336 -72 -3 -73 -3 3
       -37 c2 -21 1 -38 -3 -38 -4 0 -25 16 -48 35 -69 59 -168 78 -267 51z m187
       -147 c15 -5 41 -22 57 -37 116 -108 71 -320 -76 -361 -228 -64 -348 263 -143
       390 34 21 117 25 162 8z"
            />
            <path
              d="M5470 3617 c-91 -26 -172 -97 -214 -186 -17 -38 -21 -65 -21 -156 0
       -98 3 -116 27 -167 72 -154 235 -224 393 -169 29 10 69 31 88 45 44 33 48 33
       45 -6 l-3 -33 73 -3 72 -3 0 336 0 336 -72 -3 -73 -3 3 -37 c3 -43 -6 -48 -34
       -17 -55 61 -191 92 -284 66z m187 -148 c109 -41 155 -186 95 -300 -23 -43 -38
       -59 -82 -82 -47 -24 -63 -28 -105 -23 -155 18 -231 200 -140 334 49 72 149
       103 232 71z"
            />
            <path
              d="M6267 3616 c-20 -8 -53 -26 -72 -40 l-35 -27 0 30 0 31 -70 0 -70 0
       0 -335 0 -335 74 0 74 0 4 213 c3 182 7 218 23 251 22 47 67 76 117 76 54 0
       87 -19 111 -64 20 -38 22 -58 25 -258 l3 -218 81 0 80 0 -5 243 c-5 278 -9
       300 -78 369 -70 70 -173 95 -262 64z"
            />
            <path
              d="M6927 3616 c-111 -30 -220 -143 -247 -257 -19 -77 -8 -169 29 -243
       37 -75 92 -128 170 -165 48 -22 69 -26 151 -26 107 1 158 18 224 75 35 32 96
       123 96 146 0 6 -31 10 -83 10 -82 -1 -83 -2 -119 -38 -66 -65 -138 -73 -223
       -24 -65 38 -100 114 -92 202 8 111 82 184 184 184 62 0 100 -17 136 -60 25
       -29 28 -30 117 -30 l91 0 -17 33 c-83 162 -248 238 -417 193z"
            />
            <path
              d="M7620 3614 c-184 -66 -280 -286 -209 -476 27 -73 101 -153 174 -188
       70 -34 217 -35 287 -3 63 29 134 97 164 155 l24 48 -80 0 c-79 0 -82 -1 -115
       -34 -59 -60 -133 -70 -212 -31 -44 22 -103 84 -103 108 0 4 117 7 260 7 l260
       0 6 26 c11 44 -3 140 -29 198 -33 70 -98 141 -162 174 -64 33 -195 41 -265 16z
       m171 -134 c47 -13 102 -67 116 -113 l11 -37 -184 0 c-122 0 -184 4 -184 10 0
       39 64 110 120 134 41 18 72 19 121 6z"
            />
            <path
              d="M2240 3600 c0 -5 36 -107 79 -227 43 -120 96 -267 117 -326 l39 -108
       49 3 50 3 62 210 c35 116 63 212 64 215 1 5 79 -256 109 -365 l16 -60 50 -3
       51 -3 118 323 c64 178 118 328 119 333 1 6 -32 11 -80 13 l-82 3 -29 -98 c-17
       -54 -44 -145 -61 -202 -17 -58 -33 -106 -35 -108 -3 -3 -23 70 -87 320 l-23
       87 -62 0 c-73 0 -59 26 -125 -225 -23 -88 -45 -166 -48 -173 -4 -7 -31 69 -59
       168 -75 257 -57 230 -152 230 -45 0 -80 -4 -80 -10z"
            />
            <path
              d="M8130 3082 c-59 -60 -26 -152 55 -152 47 0 95 45 95 89 0 41 -36 80
       -82 88 -32 5 -41 1 -68 -25z m110 -12 c30 -30 27 -83 -6 -109 -30 -24 -43 -26
       -77 -10 -71 32 -47 139 30 139 20 0 41 -8 53 -20z"
            />
            <path
              d="M8150 3021 c0 -28 5 -51 10 -51 6 0 10 9 10 20 0 11 4 20 10 20 5 0
       14 -9 20 -20 6 -11 15 -20 20 -20 6 0 5 9 -2 20 -11 17 -10 22 0 29 8 5 12 17
       10 27 -2 14 -13 20 -41 22 l-37 3 0 -50z m60 25 c0 -8 -7 -17 -16 -20 -23 -9
       -24 -8 -24 14 0 13 7 20 20 20 11 0 20 -6 20 -14z"
            />
          </g>
        </svg>
      );
      break;
    case "Vans":
      return (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          className={cn("", style.svg)}
          viewBox="0 0 2560.000000 1036.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1036.000000) scale(0.100000,-0.100000)"
            className={cn("", style.g)}
            fill="#000000"
            stroke="none"
          >
            <path
              d="M960 10010 c-236 -13 -746 -62 -786 -75 -8 -2 3 -63 32 -187 24 -101
       71 -298 105 -438 241 -1012 514 -2094 1251 -4950 241 -937 616 -2416 733
       -2898 l96 -393 122 -254 122 -255 75 0 c41 0 625 -9 1296 -21 l1221 -22 134
       61 133 61 960 3645 961 3645 114 175 114 174 101 6 c55 3 376 10 711 16 336 6
       644 12 685 14 41 2 1126 0 2410 -4 1284 -5 4757 -16 7716 -26 l5382 -18 65 32
       c77 38 128 93 156 167 39 103 44 166 37 455 -7 296 -1 391 35 499 18 53 21 77
       15 142 -17 209 -101 324 -274 380 -103 33 -318 36 -610 10 -270 -24 -449 -26
       -544 -7 -56 12 -1024 16 -6470 25 -3521 6 -7445 13 -8719 17 l-2316 6 -94 -80
       -94 -79 -824 -3234 c-453 -1779 -829 -3243 -836 -3254 -7 -11 -50 -62 -95
       -113 -87 -98 -90 -99 -140 -59 -24 19 -35 47 -75 197 -155 570 -339 1366 -625
       2695 -347 1615 -507 2289 -726 3070 -60 213 -233 786 -239 793 -8 9 -301 53
       -445 67 -198 19 -655 27 -870 15z"
            />
            <path
              d="M25147 7970 c-100 -25 -201 -117 -232 -209 -25 -76 -17 -188 17 -256
       75 -145 250 -212 403 -154 81 30 165 113 189 187 25 74 19 190 -12 254 -65
       133 -228 212 -365 178z m173 -71 c172 -77 221 -284 100 -422 -56 -63 -118 -91
       -200 -91 -77 1 -123 18 -178 69 -57 51 -86 114 -86 189 0 80 18 130 68 184 80
       87 198 116 296 71z"
            />
            <path
              d="M25080 7651 l0 -181 45 0 45 0 0 65 0 65 33 0 c51 0 69 -19 75 -78
       l5 -52 43 0 44 0 0 39 c0 55 -18 100 -48 115 l-26 14 31 15 c51 27 58 90 14
       139 l-29 33 -116 3 -116 4 0 -181z m180 101 c45 -37 5 -92 -66 -92 -22 0 -24
       3 -24 55 l0 55 34 0 c19 0 44 -8 56 -18z"
            />
            <path
              d="M22190 7434 c-574 -51 -1010 -168 -1440 -384 -342 -173 -508 -314
       -692 -589 -210 -315 -309 -654 -310 -1061 -1 -424 97 -764 316 -1100 239 -366
       631 -668 1024 -791 53 -17 144 -48 202 -69 180 -66 386 -103 720 -130 404 -33
       598 -57 757 -95 435 -103 633 -332 633 -731 0 -102 -2 -110 -31 -163 -112
       -200 -341 -369 -583 -431 -93 -23 -365 -44 -474 -36 -339 26 -586 104 -1137
       359 -148 68 -319 145 -380 170 -111 45 -324 117 -348 117 -7 0 -51 -44 -99
       -98 -316 -357 -539 -690 -686 -1022 -84 -192 -84 -169 -3 -237 271 -228 526
       -364 1181 -628 140 -56 285 -116 322 -133 123 -56 496 -139 803 -179 198 -26
       762 -26 945 0 759 108 1349 386 1826 862 277 276 449 642 520 1105 25 160 25
       492 0 650 -23 150 -85 392 -130 509 -179 464 -495 757 -1048 975 -170 67 -401
       134 -811 237 -420 105 -562 144 -744 205 -250 83 -467 184 -631 294 -86 58
       -100 72 -126 122 -42 85 -54 183 -32 279 44 197 198 400 361 475 355 163 736
       151 1215 -37 74 -30 279 -125 455 -212 424 -211 445 -220 466 -210 37 17 273
       238 366 344 253 285 369 515 380 754 l6 110 -104 71 c-373 256 -798 446 -1254
       562 -228 58 -369 84 -635 118 -119 15 -686 28 -800 18z"
            />
            <path
              d="M9155 7134 c-316 -24 -710 -73 -725 -92 -4 -4 -30 -83 -59 -177 -317
       -1027 -403 -1310 -536 -1750 -415 -1378 -741 -2520 -1044 -3660 -177 -666
       -207 -783 -199 -790 13 -13 289 -64 445 -82 223 -25 792 -25 1048 1 99 10 186
       21 194 26 8 4 72 206 151 481 75 261 142 484 148 496 15 28 102 101 174 147
       196 124 473 169 900 146 123 -7 349 -16 503 -20 244 -6 287 -10 335 -27 99
       -36 144 -64 210 -132 107 -108 166 -250 236 -566 39 -179 91 -341 135 -426
       l40 -76 177 -7 c97 -4 281 -14 407 -22 311 -19 673 -18 817 2 117 16 148 22
       259 55 l66 19 -133 537 c-73 296 -338 1367 -588 2380 l-455 1841 -261 804
       c-144 441 -263 804 -264 805 -3 4 -524 54 -716 69 -191 15 -1129 28 -1265 18z
       m601 -2331 c196 -436 310 -815 349 -1153 l7 -56 -119 -37 c-65 -21 -152 -45
       -193 -54 -95 -20 -287 -23 -360 -4 -58 15 -149 57 -189 89 l-24 19 31 154 c17
       85 47 249 67 364 78 456 146 680 265 869 l43 69 28 -56 c16 -30 58 -122 95
       -204z"
            />
            <path
              d="M17810 7110 c-187 -15 -391 -56 -489 -97 l-41 -18 -4 -380 c-4 -358
       -12 -508 -63 -1240 -10 -155 -17 -375 -17 -622 l-1 -382 -100 -18 -100 -19
       -16 26 c-8 14 -338 606 -733 1317 l-718 1292 -100 68 -99 67 -507 1 c-525 0
       -676 -7 -992 -46 -168 -21 -369 -55 -378 -64 -11 -11 -53 -662 -72 -1120 -29
       -709 -34 -1107 -32 -2995 l2 -1945 54 -165 c45 -139 57 -165 72 -163 217 25
       295 26 657 9 416 -20 550 -15 720 28 78 20 205 68 208 78 0 2 13 604 29 1339
       l28 1335 53 52 c55 53 86 69 114 58 19 -7 207 -293 337 -511 186 -314 315
       -552 698 -1295 224 -434 285 -549 438 -816 l126 -221 175 -7 c97 -4 318 -17
       491 -28 235 -17 411 -22 690 -22 341 0 388 2 520 22 80 13 173 30 206 38 l62
       16 6 206 c32 992 50 2600 43 3837 -6 1093 -25 2275 -36 2287 -8 9 -427 64
       -626 82 -211 20 -475 26 -605 16z"
            />
          </g>
        </svg>
      );
      break;
    case "Reebook":
      return <></>;
      break;
    default:
      return <></>;
      break;
  }
};
