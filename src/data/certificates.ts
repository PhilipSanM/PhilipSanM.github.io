import type { Certificate } from '../types';

import cognizatCert from '../assets/cognizant.png';
import agentsHuggins from '../assets/agentsHuggin.png';

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Cognizant Gen AI Externship',
    issuer: 'Cognizant & Udacity',
    year: 2024,
    imageUrl: cognizatCert,
    link: 'https://www.udacity.com/certificate/e/99fa3498-2263-11ef-ae08-afe0407c0b8d',
  },
  {
    id: 'cert-2',
    title: 'Hugging Face Agents Course',
    issuer: 'Hugging Face',
    year: 2025,
    imageUrl: agentsHuggins,
    link: 'https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/83991838ab2c607a4b8b561eff35d9922fdb9060768534991912e2f8577500db?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20260317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260317T224346Z&X-Amz-Expires=3600&X-Amz-Signature=7bee867b3df0c96607794cb9a2088e499a1225cb745e27a7447bf5e02f4f2c61&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=public&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-02-21.png%3B+filename%3D%222025-02-21.png%22%3B&response-content-type=image%2Fpng&x-amz-checksum-mode=ENABLED&x-id=GetObject&Expires=1773791026&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3Mzc5MTAyNn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82N2E0NzAzNzc0OWVhMmM0YjlmYWZkNGIvODM5OTE4MzhhYjJjNjA3YTRiOGI1NjFlZmYzNWQ5OTIyZmRiOTA2MDc2ODUzNDk5MTkxMmUyZjg1Nzc1MDBkYioifV19&Signature=B28q5ua%7E81pwC0gqARr9%7EmwP48qGnNQ2C6ESeuBi6cGdTS7AO6K7SStb0ljYeoiGAjl2feUk1IOX6akVa5ltRN92KNnyhTcAjBDOteMgNoAYpw5K4ybp6vW6T1VJcASFfOIhSauxjYjnynNggES%7EwCRBHG4LkFbMk%7EQbvRclU605mhLz%7EdK9C2shCYKVKZSJ8EeJmYjyyCpatc3BUcleyvoiT0r20IGx7JPNgnXH1p0zrNVoJCBhqpufqEFwjEysXWpV0T85om2ByF1kbhE7N2omCBdDA1oASeLl39z3gpKun7xiD9m%7E0En%7E95bN1RD6DF%7ESc2WHQUlOn4P43-qqdg__&Key-Pair-Id=K2L8F4GPSG1IFC',
  },
//   {
//     id: 'cert-3',
//     title: 'Computer Vision Specialist',
//     issuer: 'Coursera',
//     year: 2023,
//     imageUrl: './assets/cert-cv.png',
//     link: 'https://example.com/cert-3',
//   },
];
