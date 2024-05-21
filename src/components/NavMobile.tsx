import { useClickAway } from "react-use";
import React, { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import { TfiAngleDown } from "react-icons/tfi";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const [routeList, setRouteList] = useState(routes);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white dark:bg-neutral-800 border-b border-b-white/20 dark:border-b-black/20"
          >
            <ul className="grid gap-2">
              {routeList.map((route, idx) => {
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
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr bg-white dark:bg-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => {
                        if (!route.subRoutes) {
                          setOpen((prev) => !prev);
                        } else {
                          route.open = !route.open;
                          setRouteList([...routes]);
                        }
                      }}
                      className={`flex items-center justify-between w-full px-5 py-2 text-lg rounded-xl bg-white dark:bg-neutral-800 dark:text-white ${
                        !route.subRoutes
                          ? "active:text-xl active:text-amber-500 transition-all"
                          : ""
                      }`}
                      href={route.href}
                    >
                      <div className="flex items-center gap-2">
                        {Icon ? (
                          <Icon className="me-2" />
                        ) : (
                          <div className="w-0.5 bg-amber-500 h-7"></div>
                        )}
                        <span className="flex gap-1">{route.title}</span>
                      </div>
                      {route.subRoutes && <TfiAngleDown />}
                    </a>
                    {route.open && route.subRoutes && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white dark:bg-neutral-800 border-b border-b-white/20 dark:border-b-black/20"
                        >
                          <ul className="grid gap-2">
                            {route.subRoutes.map((route, idx) => {
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
                                  className="p-[0.08rem] rounded-xl bg-gradient-to-tr bg-white dark:text-white dark:bg-neutral-800 via-neutral-950 to-neutral-700"
                                >
                                  <a
                                    onClick={() => setOpen((prev) => !prev)}
                                    className={
                                      "flex items-center justify-between w-full px-5 py-2 text-lg rounded-xl bg-white dark:bg-neutral-800 active:text-xl active:text-amber-500 transition-all"
                                    }
                                    href={route.href}
                                  >
                                    <div className="flex items-center gap-2">
                                      {Icon ? (
                                        <Icon className="me-2" />
                                      ) : (
                                        <div className="w-0.5 bg-amber-500 h-7"></div>
                                      )}
                                      <span className="block text-left break-words w-56">
                                        {route.title}
                                      </span>
                                    </div>
                                  </a>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
