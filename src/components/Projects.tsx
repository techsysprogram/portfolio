"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="wrapper">
      <h2 className="text-2xl font-bold text-center mb-8">Projets récents</h2>

      <div className="relative">
        {/* Flèche gauche (sans fond au hover) */}
        <button className="swiper-button-prev absolute top-1/2 -left-5 z-10 hidden md:flex transform -translate-y-1/2 
          text-gray-500 dark:text-gray-300 opacity-50 hover:opacity-100 transition-all duration-300">
          <ChevronLeft className="w-2 h-2" />
        </button>

        {/* Slider Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile : 1 projet
            768: { slidesPerView: 2 }, // Tablette : 2 projets
            1024: { slidesPerView: 3 } // Desktop : 3 projets
          }}
          /* className="w-full" */
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèche droite (sans fond au hover) */}
        <button className="swiper-button-next absolute top-1/2 -right-5 z-10 hidden md:flex transform -translate-y-1/2 
          text-gray-500 dark:text-gray-300 opacity-50 hover:opacity-100 transition-all duration-300">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

// Composant pour chaque projet
function ProjectCard({ project }: { project: any }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-[240px] flex flex-col justify-between">
      <div>
        <CardHeader>
          {/* Titre limité à une seule ligne avec "..." */}
          <CardTitle className="text-lg font-semibold text-blue-600 dark:text-blue-400 truncate">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Résumé limité à 2 lignes */}
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 h-[48px]">
            {project.summary}
          </p>
            <Button onClick={()=>setOpen(true)} variant="outline">Voir plus</Button>
        </CardContent>
      </div>
      <div className="mt-auto">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}

