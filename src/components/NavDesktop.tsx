import { routes } from "../routes";
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export const NavDesktop = () => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);

  return (
    <>
      <ul className="hidden lg:flex lg:items-center gap-2 text-lg">
        {routes.map((route, index) => {
          const { Icon, href, title, subRoutes } = route;
          return (
            <li
              key={index}
              onMouseEnter={(event) => {
                setHovering(index)
                setPopoverLeft(event.currentTarget.offsetLeft);
              }}
              onMouseLeave={() => setHovering(null)}
            >
              <a
                href={href}
                className="flex items-center gap-1 dark:text-white hover:bg-amber-500 hover:text-white py-2 px-4 transition-all rounded-3xl"
              >
                { Icon ? <Icon className="me-2" /> : <div className="w-0.5 bg-amber-500 h-7 lg:h-6 me-2"></div> }
                {title}
              </a>
              {hovering === index && subRoutes && (
                <div
                  className="absolute"
                  style={{
                    left: popoverLeft ?? 0,
                  }}
                >
                  <div style={{width: 160, height: 10}}></div>
                  <div
                    className="absolute shadow bg-white dark:bg-neutral-800 rounded-xl w-[400px] transition-all"
                  >
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="left-0 shadow-4xl right-0 top-[3.5rem] p-2 rounded-xl bg-white dark:bg-neutral-800 border-b border-b-white/20"
                      >
                        <ul className="grid gap-2">
                          {subRoutes.map((route, idx) => {
                            const { Icon } = route;

                            return (
                              <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 20,
                                  delay: 0.1 + idx / 10,
                                }}
                                key={route.title}
                                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr bg-white dark:bg-neutral-800 dark:text-white via-neutral-950 to-neutral-700 hover:text-amber-500"
                              >
                                <a
                                  className={
                                    "flex items-center w-full p-2 rounded-xl bg-white dark:bg-neutral-800 text-base hover:text-lg transition-all"
                                  }
                                  href={route.href}
                                >
                                  { Icon ? <Icon className="me-2" /> : <div className="w-0.5 bg-amber-500 h-7 lg:h-6 me-2"></div> }
                                  <span className="flex gap-1">{route.title}</span>
                                </a>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
