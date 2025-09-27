"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Calculator, Building, PieChart, Shield, Users, Lightbulb, 
         Laptop, PiggyBank, Star, MessageCircle, Phone, Mail, MapPin,
         CheckCircle, ArrowRight } from 'lucide-react';

// Definição de tipos para as variantes de animação
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const services = [
    {
      icon: Building,
      title: "Abertura de Empresas",
      description: "Processo simplificado e rápido para abrir sua empresa com toda a documentação necessária.",
      features: ["Registro na Junta Comercial", "Obtenção do CNPJ", "Inscrições municipais e estaduais"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Contabilidade Completa",
      description: "Gestão contábil para MEI, ME, EPP com tecnologia de ponta e atendimento personalizado.",
      features: ["Escrituração fiscal", "Demonstrações financeiras", "Obrigações acessórias"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: PieChart,
      title: "BPO Financeiro",
      description: "Terceirização completa da área financeira com controle total e relatórios detalhados.",
      features: ["Contas a pagar e receber", "Conciliação bancária", "Fluxo de caixa"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Consultoria Tributária",
      description: "Planejamento estratégico para reduzir custos e otimizar a carga tributária da sua empresa.",
      features: ["Análise de regime tributário", "Planejamento fiscal", "Recuperação de créditos"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa de recursos humanos com cumprimento de todas as obrigações trabalhistas.",
      features: ["Admissões e demissões", "Folha e encargos", "Obrigações do eSocial"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Lightbulb,
      title: "Planejamento Tributário",
      description: "Estratégias inteligentes para economia fiscal legal e segura para sua empresa.",
      features: ["Análise de cenários", "Elisão fiscal", "Monitoramento contínuo"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Laptop,
      title: "100% Digital",
      description: "Atendimento completamente digital com tecnologia de ponta",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PiggyBank,
      title: "Redução de Custos",
      description: "Planejamento tributário inteligente para economizar",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      title: "Equipe Especializada",
      description: "Profissionais experientes em diversos segmentos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Suporte Rápido",
      description: "Atendimento ágil via WhatsApp e e-mail",
      color: "from-red-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Ana Souza",
      role: "Empreendedora",
      content: "A Caasi Contábil simplificou toda a burocracia da minha empresa. Hoje eu tenho mais tempo para focar no que importa: vender!",
      avatar: "AS",
      color: "from-pink-400 to-pink-500"
    },
    {
      name: "Roberto Martins",
      role: "Diretor Comercial",
      content: "Economizei 40% em impostos com o planejamento tributário da Caasi. Profissionais excelentes e atendimento nota 10!",
      avatar: "RM",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Carla Lima",
      role: "CEO Startup",
      content: "Parceria essencial para o crescimento da nossa startup. Suporte digital incrível e soluções sempre na medida!",
      avatar: "CL",
      color: "from-green-400 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-slate-800">Caasi</h1>
                <span className="text-sm text-green-600 font-medium">Contábil</span>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#servicos" className="text-gray-700 hover:text-slate-900 transition-colors">Serviços</a>
                <a href="#sobre" className="text-gray-700 hover:text-slate-900 transition-colors">Sobre</a>
                <a href="#depoimentos" className="text-gray-700 hover:text-slate-900 transition-colors">Clientes</a>
                <motion.a 
                  href="#contato" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Contato
                </motion.a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-slate-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#servicos" className="block px-3 py-2 text-gray-700">Serviços</a>
                <a href="#sobre" className="block px-3 py-2 text-gray-700">Sobre</a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-700">Clientes</a>
                <a href="#contato" className="block px-3 py-2 bg-green-500 text-white rounded-full text-center">Contato</a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-black/20"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-16 w-6 h-6 bg-white/30 rounded-full"
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={scaleVariants}
              className="mb-8"
            >
              <motion.div 
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur border border-white/20"
              >
                <Calculator className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Soluções Contábeis
              <motion.span 
                className="text-green-400 block"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Inteligentes
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Contabilidade digital, ágil e 100% focada em resultados para sua empresa crescer com segurança.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a 
                href="https://wa.me/5585999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Consulta Gratuita
              </motion.a>
              
              <motion.a 
                href="#servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 flex items-center gap-2"
              >
                Conhecer Serviços
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Sua parceira em
                <span className="text-green-500"> crescimento</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                A Caasi Contábil é uma empresa moderna que une tecnologia e expertise para oferecer contabilidade descomplicada para empresas de todos os portes.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Nosso compromisso é simplificar sua gestão financeira e garantir o crescimento seguro do seu negócio através de soluções digitais inovadoras.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-gray-600">Empresas Atendidas</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-3xl font-bold text-green-500">10+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleVariants}
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-3xl text-white">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "📈", title: "Crescimento", subtitle: "Estratégico" },
                    { icon: "🛡️", title: "Segurança", subtitle: "Garantida" },
                    { icon: "🚀", title: "Inovação", subtitle: "Constante" },
                    { icon: "🤝", title: "Parceria", subtitle: "Verdadeira" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 p-4 rounded-2xl backdrop-blur cursor-pointer"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Nossos <span className="text-green-500">Serviços</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Soluções completas e personalizadas para todas as necessidades da sua empresa
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="text-sm text-gray-500 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Por que escolher a <span className="text-green-500">Caasi?</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Diferenciais que fazem a diferença no seu negócio
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${benefit.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              O que nossos <span className="text-green-500">clientes</span> dizem
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Histórias reais de sucesso e transformação
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white text-xl font-bold mr-4`}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-green-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/20"
        />
        
        {/* Animated Background Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-${2 + i} h-${2 + i} bg-white/10 rounded-full`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={scaleVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Pronto para <motion.span 
                className="text-green-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                crescer
              </motion.span> com segurança?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-10 opacity-90"
            >
              Transforme sua contabilidade em um diferencial competitivo. Fale conosco agora mesmo!
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a 
                href="https://wa.me/5585999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition duration-300 flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Fale com um Especialista
              </motion.a>
              
              <div className="text-center">
                <p className="text-sm opacity-75">Resposta em até 5 minutos</p>
                <p className="text-sm opacity-75">Consulta 100% gratuita</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-4"
              >
                <h3 className="text-3xl font-bold text-white">Caasi</h3>
                <span className="text-lg text-green-400 font-medium ml-2">Contábil</span>
              </motion.div>
              <p className="text-gray-400 mb-6 max-w-md">
                Soluções contábeis inteligentes para empresas que querem crescer com segurança e eficiência.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <span className="text-sm font-bold">Li</span>
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <span className="text-sm font-bold">Ig</span>
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-500 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <span className="text-sm font-bold">Fb</span>
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                {['Abertura de Empresas', 'Contabilidade', 'BPO Financeiro', 'Consultoria'].map((service) => (
                  <li key={service}>
                    <a href="#servicos" className="hover:text-green-400 transition">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@caasicontabil.com.br
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (85) 99999-9999
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Fortaleza, CE
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Caasi Contábil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}