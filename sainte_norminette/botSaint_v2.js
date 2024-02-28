// Importation des modules nécessaires
require('dotenv').config(); // Charge les variables d'environnement depuis un fichier .env
const { Client, EmbedBuilder } = require('discord.js');
const schedule = require('node-schedule');
const { clientConfig } = require('./config');
const client = new Client(clientConfig);
// Crée une règle pour exécuter une tâche toutes les dix minutes
//const rule = new schedule.RecurrenceRule();
//rule.minute = new schedule.Range(0, 59, 59);

// Informations sur les exercices de c.
const exercicesInfo = {

    // Exemple de structure pour le module c00
    'pdf00': { titre: 'pdf_c00', lien: 'https://discord.com/channels/1207071388305854575/1207074069028282400', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0000': { titre: 'ft_putchar.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex00/ft_putchar.C', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0001': { titre: 'ft_print_alphabet.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex01/ft_print_alphabet.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0002': { titre: ' ft_print_reverse_alphabet.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex02/ft_print_reverse_alphabet.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0003': { titre: 'ft_print_numbers.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex03/ft_print_numbers.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0004': { titre: 'ft_is_negative.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex04/ft_is_negative.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0005': { titre: 'ft_print_comb.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex05/ft_print_comb.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0006': { titre: 'ft_print_comb2.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex06/ft_print_comb2.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0007': { titre: 'ft_putnbr.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex07/ft_putnbr.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0008': { titre: 'ft_print_combn.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c00/ex08/ft_print_combn.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c01
    'pdf01': { titre: 'pdf_c01', lien: 'https://discord.com/channels/1207071388305854575/1208952454163464203', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0100': { titre: 'ft_ft.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex00/ft_ft.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0101': { titre: 'ft_ultimate_ft.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex01/ft_ultimate_ft.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0102': { titre: 'ft_swap.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex02/ft_swap.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0103': { titre: 'ft_div_mod.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex03/ft_div_mod.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0104': { titre: 'ft_ultimate_div_mod.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex04/ft_ultimate_div_mod.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0105': { titre: 'ft_putstr.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex05/ft_putstr.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0106': { titre: 'ft_strlen.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex06/ft_strlen.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0107': { titre: 't_rev_int_tab.c', lien: 'https://github.com/Xxzer042xX/42/blob/master/c01/ex07/ft_rev_int_tab.c', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0108': { titre: 'ft_sort_int_tab.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c02
    'pdf02': { titre: 'pdf_c02', lien: 'https://discord.com/channels/1207071388305854575/1207074115350044722', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0200': { titre: 'ft_strcpy.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0201': { titre: 'ft_strncpy.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0202': { titre: 'ft_str_is_alpha.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0203': { titre: 'ft_str_is_numeric.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0204': { titre: 'ft_str_is_lowercase.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0205': { titre: 'ft_str_is_uppercase.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0206': { titre: 'ft_str_is_printable.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0207': { titre: 'ft_strupcase.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0208': { titre: 'ft_strlowcase.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0209': { titre: 'ft_strcapitalize.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0210': { titre: 'ft_strlcpy.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0211': { titre: 'ft_putstr_non_printable.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0212': { titre: 'ft_print_memory.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c03
    'pdf03': { titre: 'pdf_c03', lien: 'https://discord.com/channels/1207071388305854575/1207074131351437412', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0300': { titre: 'ft_strcmp.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0301': { titre: 'ft_strncmp.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0302': { titre: 'ft_strcat.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0303': { titre: 'ft_strncat.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0304': { titre: 'ft_strstr.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0305': { titre: 'ft_strlcat.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c04
    'pdf04': { titre: 'pdf_c04', lien: 'https://discord.com/channels/1207071388305854575/1207074131351437412', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0400': { titre: 'ft_strlen.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0401': { titre: 'ft_putstr.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0402': { titre: 'ft_putnbr.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0403': { titre: 'ft_atoi.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0403': { titre: 'ft_atoi.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0404': { titre: 'ft_putnbr_base.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },   
    'c0405': { titre: 'ft_atoi_base.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c05
    'pdf05': { titre: 'pdf_c05', lien: 'https://discord.com/channels/1207071388305854575/1207074155426750494', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0500': { titre: 'ft_iterative_factorial.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0501': { titre: 'ft_recursive_factorial.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0502': { titre: 'ft_iterative_power.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0503': { titre: 'ft_recursive_power.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0504': { titre: 'ft_fibonacci.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0505': { titre: 'ft_sqrt.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0506': { titre: 'ft_is_prime.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0507': { titre: 'ft_find_next_prime.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0508': { titre: 'Les dix dames.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c06
    'pdf06': { titre: 'pdf_c06', lien: 'https://discord.com/channels/1207071388305854575/1207074173302607953', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0600': { titre: 'ft_print_program_name.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0601': { titre: 'ft_print_params.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0602': { titre: 'ft_rev_params.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0603': { titre: 'ft_sort_params.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c07
    'pdf07': { titre: 'pdf_c07', lien: 'https://discord.com/channels/1207071388305854575/1207074198149664828', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0700': { titre: 'ft_strdup.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0701': { titre: 'ft_range.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0702': { titre: 'ft_ultimate_range.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0703': { titre: 'ft_strjoin.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0704': { titre: 'ft_convert_base.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0705': { titre: 'ft_split.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c08
    'pdf08': { titre: 'pdf_c08', lien: 'https://discord.com/channels/1207071388305854575/1207074214075699292', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0800': { titre: 'ft.h', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0801': { titre: 'ft_boolean.h', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0802': { titre: 'ft_abs.h', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0803': { titre: 'ft_point.h', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0804': { titre: 'ft_strs_to_tab.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0805': { titre: 'ft_show_tab.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c09
    'pdf09': { titre: 'pdf_c09', lien: 'https://discord.com/channels/1207071388305854575/1207074232547283005', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0900': { titre: 'libft', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0901': { titre: 'Makefile', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c0902': { titre: 'ft_split', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c10
    'pdf10': { titre: 'pdf_c10', lien: 'https://discord.com/channels/1207071388305854575/1207074246078111794', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1000': { titre: 'display_file', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1001': { titre: 'cat', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1002': { titre: 'tail', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1003': { titre: 'hexdump', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c11
    'pdf11': { titre: 'pdf_c11', lien: 'https://discord.com/channels/1207071388305854575/1207074258954625075', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1100': { titre: 'ft_foreach.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1101': { titre: 'ft_map.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1102': { titre: 'ft_any', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1103': { titre: 'ft_count_if', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1104': { titre: 'ft_is_sort.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1105': { titre: 'ft_is_sort', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1106': { titre: 'ft_sort_string_tab.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1107': { titre: 'ft_advanced_sort_string_tab.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c12
    'pdf12': { titre: 'pdf_c12', lien: 'https://discord.com/channels/1207071388305854575/1207074276696657990', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1200': { titre: 'ft_create_elem', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1201': { titre: 'ft_list_push_front', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1202': { titre: 'ft_list_size', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1203': { titre: 'ft_list_last', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1204': { titre: 'ft_list_push_back', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1205': { titre: 'ft_list_push_strs', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1206': { titre: 'ft_list_clear', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1207': { titre: 'ft_list_at', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1208': { titre: 'ft_list_reverse.c', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1209': { titre: 'ft_list_foreach', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1210': { titre: 'ft_list_foreach_if', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1211': { titre: 'ft_list_find', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1212': { titre: 'ft_list_remove_if', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1213': { titre: 'ft_list_merge', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1214': { titre: 'ft_list_sort', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1215': { titre: 'ft_list_reverse_fun', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1216': { titre: 'ft_sorted_list_insert', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1217': { titre: 'ft_sorted_list_merge', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    // Exemple de structure pour le module c13
    'pdf13': { titre: 'pdf_c13', lien: 'https://discord.com/channels/1207071388305854575/1208440385416728617', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1300': { titre: 'btree_create_node', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1301': { titre: 'btree_apply_prefix', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1302': { titre: 'btree_apply_infix', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1303': { titre: 'btree_apply_suffix', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1304': { titre: 'btree_insert_data', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1305': { titre: 'btree_search_item', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1306': { titre: 'btree_level_count', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'c1307': { titre: 'btree_apply_by_level', lien: 'https://github.com/Xxzer042xX', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    //Exemple de structure pour les modules Shell
    'sh00': { titre: 'Shell_00', lien: 'https://discord.com/channels/1207071388305854575/1208440340181418005', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'sh01': { titre: 'Shell_01', lien: 'https://discord.com/channels/1207071388305854575/1208440368627195964', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    //Exemple de structure pour les modules rush
    'rush00': { titre: 'Rush_00', lien: 'https://discord.com/channels/1207071388305854575/1208465904992522320', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'rush01': { titre: 'Rush_01', lien: 'https://discord.com/channels/1207071388305854575/1208465924458549318', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    'rush02': { titre: 'Rush_02', lien: 'https://discord.com/channels/1207071388305854575/1208465937137934397', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },
    //Exemple de structure pour le module bsq
    'bsq': { titre: 'Bsq', lien: 'https://discord.com/channels/1207071388305854575/1208467365797568582', image: 'https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4' },        
};
// Événement déclenché lorsque le bot est connecté et prêt
client.once('ready', () => {
    console.log('Saint Norminette is ready');
});



//fonction rappel examen et rush mercredi
schedule.scheduleJob({ dayOfWeek: 3, hour: 17, minute: 0 }, () => {
    const channelId = '1207071388305854580'; // Remplacez par l'ID de votre canal
    // Création de l'intégration riche pour l'événement spécial
    const embedEvent = new EmbedBuilder()
        .setColor('#FF0000') // Définit la couleur de l'embed
        .setTitle("Etes vous pret pour la Sainte Norminette ?") // Définit le titre de l'embed
        .setDescription("Le pelrinage du vendredi a commencer!") // Ajoute une description
        //.setURL('https://discord.com/events/1207071388305854575/1207727471584350319') // Définit l'URL de l'événement, permettant aux utilisateurs de cliquer sur le titre de l'embed pour y accéder
        //.setImage('URL_DE_L_IMAGE') // Ajoute une image. Remplacez 'URL_DE_L_IMAGE' par l'URL réelle de l'image que vous souhaitez afficher
        //.setTimestamp(); // Ajoute un timestamp à l'embed (optionnel)
    // Envoie l'embed dans le canal spécifié
    client.channels.cache.get(channelId)?.send({ embeds: [embedEvent] }).catch(console.error);
});

//fonction rappel examen et rush jeudi
schedule.scheduleJob({ dayOfWeek: 4, hour: 17, minute: 0 }, () => {
    const channelId = '1207071388305854580'; // Remplacez par l'ID de votre canal
    // Création de l'intégration riche pour l'événement spécial
    const embedEvent = new EmbedBuilder()
        .setColor('#FF0000') // Définit la couleur de l'embed
        .setTitle("Etes vous pret pour la Sainte Norminette ?") // Définit le titre de l'embed
        .setDescription("Le pelrinage du vendredi a commencer!") // Ajoute une description
        //.setURL('https://discord.com/events/1207071388305854575/1207727471584350319') // Définit l'URL de l'événement, permettant aux utilisateurs de cliquer sur le titre de l'embed pour y accéder
        //.setImage('URL_DE_L_IMAGE') // Ajoute une image. Remplacez 'URL_DE_L_IMAGE' par l'URL réelle de l'image que vous souhaitez afficher
        //.setTimestamp(); // Ajoute un timestamp à l'embed (optionnel)
    // Envoie l'embed dans le canal spécifié
    client.channels.cache.get(channelId)?.send({ embeds: [embedEvent] }).catch(console.error);
});

//repertoir commande "/""
client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore les messages des bots

    // Extrait le code de l'exercice (par exemple, "c0001") de la commande
    const exerciceCmd = message.content.slice(1).toLowerCase(); // Retire le '/' et convertit en minuscule
    const exercice = exercicesInfo[exerciceCmd]; // Obtient les informations de l'exercice

    if (exercice) {
        // Crée et envoie une intégration riche pour l'exercice demandé
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle(exercice.titre)
            .setURL(exercice.lien)
            //.setDescription(`Voici le fichier demandé: ${exercice.titre}`)
            //.setImage(exercice.image) // Assurez-vous que l'URL de l'image est valide
            // .setTimestamp() // Optionnel
            // .setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' }); // Optionnel
        
        message.reply({ embeds: [embed] });
    }
    
    switch (message.content) {
        case '/sainte':
            // Création et envoi d'une intégration riche pour la commande /sainte
            const embedSainte = new EmbedBuilder()
                .setColor('#f1c40f')
                .setTitle('Voici mes commandes')
                //.setURL('')
                .setDescription('/c"module"exo" exemple /c0000 = module 00 exo 00\n\n/pdf"module" exemple  /pdf00 = module c00\n\n/rush"numero" exemple /rush00\n\n/sh"numeros" exemple /sh01 = shell01\n\n/dev0 = profile Dev0:\n/dev1 = profile Dev1\n/quiz = en cours de construction')
                //.setImage('URL_DE_L_IMAGE')
                //.setTimestamp()
                //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
            message.reply({ embeds: [embedSainte] });
            break;
        case '/dev0':
            // Création et envoi d'une intégration riche pour la commande /dev0
            const embedDev0 = new EmbedBuilder()
                .setColor('#000000')
                .setTitle('Xx_Zer0_xX')
                .setURL('https://github.com/Xxzer042xX')
                .setDescription('Welcome to my GitHub planet\t🌍')
                .setImage('https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4')
                //.setTimestamp()
                //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
            message.reply({ embeds: [embedDev0] });
            break;
        case '/dev1':
            // Création et envoi d'une intégration riche pour la commande /dev1
            const embedDev1 = new EmbedBuilder()
                .setColor('FFFFFF')
                .setTitle('Yyunozorus Rex')
                .setURL('https://github.com/Yyunozor')
                .setDescription('Yyuno 🌟')
                .setImage('https://media.discordapp.net/attachments/1209291872082726912/1211334410138554429/Asset_20.png?ex=65edd214&is=65db5d14&hm=f4e393d1e309b5a9f3c03cd2930578bd0f118a47b1c1c0d07f64dc6f11731b8e&=&format=webp&quality=lossless&width=939&height=936')
                //.setTimestamp()
                //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
            message.reply({ embeds: [embedDev1] });
            break;
            // Création et envoi d'une intégration riche pour la commande /quiz
            const embedQuiz = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Quiz')
                //.setURL('')
                .setDescription('non disponible actuellement')
                .setImage('https://avatars.githubusercontent.com/u/127456016?s=400&u=1dd6a65b16756a05b17808c4082fa651a4b78f25&v=4')
                //.setTimestamp()
                //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
            message.reply({ embeds: [embedQuiz] });
            break; 
            case '/cheat42':
                // Création et envoi d'une intégration riche pour la commande /dev1
                const embedCheat42 = new EmbedBuilder()
                    .setColor('FFFFFF')
                    .setTitle('Yyunozorus Rex')
                    .setURL('https://github.com/Yyunozor/42_CheatSheet')
                    .setDescription('Cheat_sheet pour 42. Consultez le [lien GitHub](https://github.com/Yyunozor/C-programming_language_cheat_sheet) pour plus d\'informations. ')
                    .setImage('https://opengraph.githubassets.com/aad937964952bc18032bc673d13cf91b287f8e46af6324323d0b30c1b05782e1/Yyunozor/42_CheatSheet')
                    //.setTimestamp()
                    //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
                message.reply({ embeds: [embedCheat42] });
                break;
                case '/cheatc':
                    // Création et envoi d'une intégration riche pour la commande /dev1
                    const embedCheatc = new EmbedBuilder()
                        .setColor('FFFFFF')
                        .setTitle('Yyunozorus Rex')
                        .setURL('https://github.com/Yyunozor/C-programming_language_cheat_sheet')
                        .setDescription('Cheat_sheet pour le langage C. Consultez le [lien GitHub](https://github.com/Yyunozor/C-programming_language_cheat_sheet) pour plus d\'informations. ')
                        .setImage('https://opengraph.githubassets.com/68fa37ef86766bc978dcb8bd86bd3e8a4d0ce1b61067509ec1c5ed215cd71641/Yyunozor/C-programming_language_cheat_sheet')
                        //.setTimestamp()
                        //.setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' });
                    message.reply({ embeds: [embedCheatc] });
                    break;
                case '/awec':
                    // Création de l'objet EmbedBuilder pour l'intégration riche
                    const embedAwec = new EmbedBuilder()
                        .setColor('FFFFFF') // Définit la couleur de l'embed
                        .setTitle('Yunozorus Rex') // Définit le titre de l'embed
                        .setURL('https://github.com/Yyunozor/awesome-c') // Définit l'URL à associer au titre
                        .setDescription('Une collection impressionnante de ressources C. Consultez le [lien GitHub](https://github.com/Yyunozor/awesome-c) pour plus d\'informations.')
                        .setImage('https://images-ext-2.discordapp.net/external/vQfEZBzVUiIvC1k1f1C6hyuvehOVVUm-j26nWr1ktic/https/opengraph.githubassets.com/68fa37ef86766bc978dcb8bd86bd3e8a4d0ce1b61067509ec1c5ed215cd71641/Yyunozor/C-programming_language_cheat_sheet?format=webp&width=960&height=480') // Optionnel: Ajouter une image à l'embed
                        // .setFooter({ text: 'Un message de votre bot', iconURL: 'URL_DE_L_ICONE_DU_BOT' }); // Optionnel: Ajouter un pied de page à l'embed
                        // Envoi de l'embed dans le message de réponse
                        message.reply({ embeds: [embedAwec] });
                break;
                    
    }
});
// Connexion du bot à Discord avec le token spécifié dans la configuration
client.login(process.env.DISCORD_TOKEN);
