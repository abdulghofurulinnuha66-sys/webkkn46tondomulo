import desaData from '@/content/data/desa.json';
import anggotaData from '@/content/data/anggota.json';
import statsData from '@/content/data/stats.json';

export function getDesaData() {
  return desaData;
}

export function getAnggotaData() {
  return anggotaData.anggota;
}

export function getStatsData() {
  return statsData;
}
