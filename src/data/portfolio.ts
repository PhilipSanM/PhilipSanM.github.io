import type { PortfolioData } from '../types';

import homecraftRoomGif from '../assets/homecraft_room.gif';
import datasetThumbnailPng from '../assets/dataset-thumbnail.png';
import loraPng from '../assets/lora.png';
import menudoDdomingoPng from '../assets/menudodedomingo.png';
import segmentPng from '../assets/segment.png';
import spacesPng from '../assets/spaces.png';
import trumpetPng from '../assets/trumpet.png';
import unetGIf from '../assets/unet.gif';

export const portfolioData: PortfolioData = {
  author: {
    name: 'PhilipSanM',
    title: 'AI Engineer & Software Developer Engineer',
    bio: 'I am an AI engineer from the National Polytechnic Institute in Mexico, focused on turning research models into production-ready systems. I also work as a software engineer, with deep experience in computer vision and machine learning systems deployed to production, from experimentation and evaluation to monitoring and iteration. I am especially driven by the idea behind gradient descent: progress is rarely a giant leap, but the result of many small, consistent corrections in the right direction.',
    avatar: './assets/avatar.jpg',
  },
  contacts: [
    {
      label: 'GitHub',
      href: 'https://github.com/philipsanm',
      icon: '💻',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/philipsanm/',
      icon: '🔗',
    },
    {
      label: 'Email',
      href: 'mailto:felipesanchezmart@gmail.com',
      icon: '✉️',
    },
    {
      label: 'Kaggle',
      href: 'https://www.kaggle.com/philipsanm',
      icon: '📊',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/PhilipSanM/',
      icon: '🧠',
    },
  ],
  projects: [
    {
      id: 'homecraft',
      title: 'HomeCraft',
      abstract: 'AI-driven 3D home redesign platform using computer vision and generative models.',
      description:
        'HomeCraft enables users to capture a video of their room, extract key frames, segment objects, apply inpainting, and generate a fully editable 3D model of their space. The platform leverages advanced computer vision and generative AI to deliver seamless virtual home redesigns without physically modifying the real-world environment.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'PyTorch', category: 'framework' },
        { name: 'Docker', category: 'tool' },
        { name: 'Diffusers', category: 'framework' },
      ],
      highlights: [
        'Real-time video processing and key frame extraction',
        'Semantic segmentation for object detection and isolation',
        'Inpainting with generative models',
        'Photogrammetry with Gaussian Splatting for 3D model generation',
        'Fully editable 3D scene representation',
      ],
      imageUrl: homecraftRoomGif,
      github: 'https://github.com/PhilipSanM/Homecraft',
      year: 2025,
      featured: true,
    },
    {
      id: 'menudo-domingo',
      title: 'MenudoDdomingo: Personalized Learning Platform',
      abstract: 'An AI-powered web platform that recommends learning activities for children based on their learning style.',
      description:
        'Developed an intelligent educational platform using Llama 3.1, LangChain, and Qdrant to personalize learning activities for children. The system builds a RAG pipeline from questionnaire responses to infer each child\'s learning style, then retrieves targeted activities aligned with that profile. It also includes an audio-analysis flow: uploaded recordings are transcribed with Whisper, sent to the language model for interpretation, and classified to support adaptive recommendations.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'JavaScript', category: 'language' },
        { name: 'HTML', category: 'tool' },
        { name: 'CSS', category: 'tool' },
        { name: 'Flask', category: 'framework' },
        { name: 'LangChain', category: 'framework' },
        { name: 'Qdrant', category: 'tool' },
        { name: 'Whisper', category: 'model' },
        { name: 'Llama 3.1', category: 'model' },
      ],
      highlights: [
        'Built a questionnaire-driven RAG workflow to profile learning styles',
        'Mapped learning-style vectors to activity recommendations for children',
        'Integrated audio upload, transcription (Whisper), and LLM-based classification',
        'Implemented full web stack with HTML/CSS/JavaScript frontend and Flask backend',
      ],
      imageUrl: menudoDdomingoPng,
      github: 'https://github.com/PhilipSanM/menudoDdomingo',
      year: 2024,
      featured: true,
    },
    {
      id: 'mexico-night-road-segmentation',
      title: 'Night Road Segmentation for Mexican Highways',
      abstract: 'A U-Net segmentation project for lane and road-scene understanding in low-light highway conditions.',
      description:
        'Built and trained multiple U-Net variants in Python for semantic segmentation of Mexican highways at night. The project focused on experimenting with different neuron sizes and layer depths to improve representation quality under low visibility, noise, and strong class imbalance. Evaluation was performed on an approximately 1,000-image test split, and the model family was benchmarked against pretrained segmentation baselines adapted to this domain. The best configuration reached 83% accuracy, showing that targeted architecture tuning can significantly improve segmentation behavior in challenging nighttime driving scenarios.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'U-Net', category: 'model' },
        { name: 'Computer Vision', category: 'framework' },
      ],
      highlights: [
        'Trained and compared multiple U-Net architectures with different channel widths and encoder-decoder depths',
        'Designed a night-highway segmentation workflow specialized for Mexican road conditions',
        'Ran evaluation on a ~1,000-image test split and analyzed behavior under low-light edge cases',
        'Reached 83% accuracy and validated improvements against pretrained segmentation baselines',
      ],
      imageUrl: unetGIf,
      year: 2024,
      featured: true,
    },
    {
      id: 'gpt2-lora-spam-classifier',
      title: 'GPT-2 LoRA Spam Classifier',
      abstract: 'Parameter-efficient NLP fine-tuning of GPT-2 with LoRA for binary spam vs non-spam classification.',
      description:
        'Built an NLP text-classification pipeline in Google Colab using Low-Rank Adaptation (LoRA) on GPT-2 to classify messages into spam and not spam. The project focused on parameter-efficient fine-tuning: freezing most pretrained weights and training low-rank adapters to reduce compute while retaining strong performance. Training and evaluation logs showed stable accuracy around 85.2% with improving validation loss across epochs (0.398175 -> 0.328181 -> 0.304032), indicating more confident class separation as optimization progressed. This project demonstrates practical PEFT techniques for lightweight adaptation of large language models to domain-specific classification tasks.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'GPT-2', category: 'model' },
        { name: 'LoRA', category: 'model' },
        { name: 'NLP', category: 'framework' },
        { name: 'Google Colab', category: 'tool' },
      ],
      highlights: [
        'Implemented binary classification labels for spam vs non-spam with a transformer backbone',
        'Applied LoRA adapters for parameter-efficient fine-tuning instead of full-model retraining',
        'Tracked epoch-level metrics: Accuracy ~0.852018 with validation loss improving to 0.304032',
        'Validated the approach as an efficient baseline for real-world NLP filtering tasks',
      ],
      imageUrl: loraPng,
      link: 'https://colab.research.google.com/drive/1O-aNK26S89XDgfDojfBB9GaMA6F3xDQy?usp=sharing',
      year: 2024,
      featured: false,
    },
    {
      id: 'genetic-sudoku',
      title: 'Genetic Sudoku Solver',
      abstract: 'A Python genetic algorithm that solves difficult Sudoku instances through evolutionary search.',
      description:
        'Designed and implemented a full genetic algorithm in Python to solve Sudoku, an NP-complete combinatorial problem in its generalized form. Instead of relying on deterministic backtracking, this project explores a population-based search strategy that is especially useful when puzzles have few given clues and a much larger search space. Candidate boards evolve through selection, crossover, and mutation, guided by a fitness function that penalizes row, column, and subgrid conflicts. This approach demonstrates how evolutionary optimization can quickly move toward high-quality solutions, avoid some local dead-ends of naive search, and provide a strong alternative perspective to classical exact solvers.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'Genetic Algorithm', category: 'model' },
      ],
      highlights: [
        'Built an end-to-end evolutionary pipeline: initialization, selection, crossover, mutation, and elitism',
        'Engineered a conflict-based fitness function to steadily improve candidate Sudoku boards across generations',
        'Compared stochastic evolutionary behavior against traditional backtracking-style solving strategies',
        'Showcased genetic algorithms as a practical optimization method for hard discrete-search problems',
      ],
      imageUrl: spacesPng,
      github: 'https://github.com/PhilipSanM/Genetic_Sudoku',
      year: 2023,
    },
    {
      id: 'city-road-binary-segmentation',
      title: 'City Road Binary Segmentation (U-Net)',
      abstract: 'A two-class U-Net segmentation model for urban scenes, separating road vs non-road pixels.',
      description:
        'Developed a semantic segmentation pipeline in Python using U-Net for city driving environments with two target classes: road and non-road. The project focused on reliable binary masks for urban road understanding and evaluated class-wise IoU across the test set. The resulting mean IoU reached 0.9631499094202899, with strong per-class behavior and robust segmentation boundaries in challenging street layouts.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'U-Net', category: 'model' },
        { name: 'NumPy', category: 'tool' },
        { name: 'Computer Vision', category: 'framework' },
      ],
      highlights: [
        'Built a binary semantic segmentation workflow for road vs non-road classification',
        'Computed and logged per-class IoU metrics and aggregate performance across the test set',
        'Achieved mean IoU of 0.9631499094202899 on evaluation outputs',
        'Validated segmentation quality visually with class-mask overlays for urban scenes',
      ],
      imageUrl: segmentPng,
      link: 'https://colab.research.google.com/drive/1nn6CNQzoW_zo4MEaHLoAlh8g9CHj-89-?usp=sharing#scrollTo=HRHDVEZqvkDw',
      year: 2024,
      featured: false,
    },
    {
      id: 'spanish-twitter-sentiment-dataset',
      title: 'Spanish Twitter Sentiment Dataset and Scraper Pipeline',
      abstract: 'A Spanish NLP sentiment initiative combining tweet scraping, labeled dataset creation, and downstream emotion-aware journaling use cases.',
      description:
        'Contributed to the bitacora-diarIA ecosystem by supporting a Twitter sentiment analysis workflow in Spanish, including data collection/scraping and dataset preparation for model training. The resulting Kaggle dataset was designed as a foundation for Spanish sentiment modeling and has reached more than 1,800 downloads, highlighting real community adoption. This resource supports AI pipelines that recognize user voice, store emotional context in a personal log, and power advisory features built with sequence models such as RNNs and vector representations like Word2Vec to better capture personal expression patterns.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'NLP', category: 'framework' },
        { name: 'RNN', category: 'model' },
        { name: 'Word2Vec', category: 'model' },
        { name: 'Kaggle', category: 'tool' },
      ],
      highlights: [
        'Built Spanish tweet sentiment data assets to support real NLP model development',
        'Published a Kaggle dataset used for Spanish sentiment-analysis experimentation',
        'Reached 1,800+ downloads, demonstrating practical value and external reuse',
        'Enabled sentiment-aware logging and recommendation features for bitacora-diarIA',
      ],
      imageUrl: datasetThumbnailPng,
      link: 'https://www.kaggle.com/datasets/philipsanm/sentiment-analysis-in-spanish-tweets',
      github: 'https://github.com/Kevin-Palacios/bitacora-diarIA',
      year: 2023,
      featured: false,
    },
    {
      id: 'trumpet-note-classifier-cnn-attention',
      title: 'Trumpet Note Classifier (CNN + Attention)',
      abstract: 'Audio-note classification experiments moving from a baseline CNN to a CNN enhanced with attention layers.',
      description:
        'Built an experimental music-classification pipeline to recognize trumpet notes using deep learning. The first version used a plain CNN and served as a behavioral baseline, showing low early performance during short training runs (accuracy around 0.06 to 0.11 across logged epochs). A second iteration introduced attention layers on top of the convolutional representation to better focus on informative note patterns, raising performance substantially to about 0.8604234 accuracy. The project was designed as a practical study of how attention mechanisms can improve sequence-aware feature weighting in audio-oriented classification tasks.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'CNN', category: 'model' },
        { name: 'Attention', category: 'model' },
        { name: 'TensorFlow', category: 'framework' },
        { name: 'Kaggle', category: 'tool' },
      ],
      highlights: [
        'Established a CNN baseline to measure raw trumpet-note classification behavior',
        'Observed baseline epoch logs near chance-level accuracy during the initial training configuration',
        'Integrated attention layers and improved model focus on relevant signal regions',
        'Increased final accuracy to approximately 0.8604234 after the CNN+attention upgrade',
      ],
      imageUrl: trumpetPng,
      link: 'https://www.kaggle.com/code/philipsanm/trumpet-cnn#Gradcam',
      year: 2024,
      featured: false,
    },
  ],
  research: {
    interests: [
      'Transformer Architecture',
      'Attention Mechanisms',
      'Language Models',
      'Transfer Learning',
      'Neural Architecture Search',
      'Model Optimization',
    ],
    publications: [
      'Published in conference X (2024)',
      'Published in journal Y (2023)',
    ],
  },
};
